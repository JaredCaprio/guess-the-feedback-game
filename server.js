const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");
const ejs = require("ejs");
const serveStatic = require("serve-static");
const MongoClient = require("mongodb").MongoClient;
const connectionString = process.env.MONGODB_URI;
app.use(cors());
/* app.use("/public", express.static("public")); */
app.use(serveStatic(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json({ limit: "1mb" }));

MongoClient.connect(connectionString)
  .then((client) => {
    console.log("connected to database");
    const db = client.db("feedback-game");
    const infoCollection = db.collection("highscores");

    app.post("/addScore", (request, response) => {
      let parsedInt = parseInt(request.body.score);
      infoCollection
        .insertOne({
          score: parsedInt,
          name: request.body.name,
        })
        .then((result) => {
          console.log("score added");
          response.redirect("/");
        });

      console.log(request.body);
    });

    app.get("/", (request, response) => {
      infoCollection
        .find()
        .sort({ score: -1 })
        .limit(30)
        .toArray()
        .then((data) => {
          response.render("index", { info: data });
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));

app.listen(process.env.PORT || 8000, () => {
  console.log(
    `The sever is running on port ${process.env.PORT}, you better go catch it!`
  );
});
