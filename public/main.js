//Selectors
const displayContainer = document.querySelector("[data-display-container]");
const optionBtn = document.querySelectorAll("[data-option-btn]");
const optionBtnArray = Array.from(optionBtn);
const playBtn = document.querySelector("[data-play-btn]");
const pauseBtn = document.querySelector("[data-pause-btn]");
const recordIcon = document.querySelector("[data-record-icon]");
const audioEl = document.querySelector("[data-audio-el]");
const roundNumber = document.querySelector("[data-round-numb]");
const optionsContainer = document.querySelector("[data-options-container]");
const countdownTimerEl = document.querySelector("[data-timer]");
const timerHeader = document.querySelector("[data-timer-header]");
const resultDialog = document.querySelector("[data-result-dialog]");
const endGameDialog = document.querySelector("[data-end-game-dialog]");
const userOptionResult = document.querySelector("[data-option-result]");
const songTitleResult = document.querySelector("[data-song-title]");
const songArtistResult = document.querySelector("[data-song-artist]");
const songYearResult = document.querySelector("[data-song-year]");
const albumCoverResult = document.querySelector("[data-album-cover]");
const nextRoundBtn = document.querySelector("[data-next-round]");
const startBtn = document.querySelector("[data-start-btn]");
const startSongHeader = document.querySelector("[data-start-song]");
const fullSongEl = document.querySelector("[data-full-song]");
const playAgainBtn = document.querySelector("[data-play-again]");
const userTotalScore = document.querySelector("[data-user-total-score]");
const nameInput = document.querySelector("[data-name-input]");
const highScoreOl = document.querySelector("[data-high-score-ol]");
const gameRulesDialog = document.querySelector("[data-game-rules-dialog]");
const gameRulesLink = document.querySelector("[data-game-rules-link]");
const gameRulesClosebtn = document.querySelector("[data-rules-close-btn]");
const saveScoreBtn = document.querySelector("[data-save-score]");
const savedIndicate = document.querySelector("[data-saved-indicate]");
/* const clearScoresBtn = document.querySelector("[data-clear-scores]"); */
const volumeControlEl = document.querySelector("[data-vol-control]");
const livesHearts = document.querySelectorAll("[data-live-heart]");
const enterInit = document.querySelector("[data-enter-init]");
const allScores = document.querySelector("[data-all-scores]");
const localScores = document.querySelector("[data-local-scores]");
const carets = document.querySelectorAll("[data-caret]");
const allScoresOl = document.querySelector("[data-all-scores-ol]");
const endGameForm = document.querySelector("[data-end-game-form]");
const highScoresContainer = document.querySelectorAll("[data-high-scores]");

//Matchmedia

if (window.matchMedia("(max-width: 280px").matches) {
  recordIcon.style.fontSize = "150px";
} else if (window.matchMedia("(max-width: 768px").matches) {
  recordIcon.style.fontSize = "275px";
} else {
  recordIcon.style.fontSize = "450px";
}

//Variables

let songsInfo = [
  {
    title: "Backbone",
    album: "From Mars to Sirius",
    artist: "Gojira",
    year: "2005",
    snippetSrc: "public/Audio/Backbone-Snippet.mp3",
    fullSongSrc: "public/Audio/Backbone-Gojira.mp3",
    albumCoverSrc: "public/Img/gojira-cover.jpeg",
  },
  {
    title: "Mind Collapse",
    album: "Ritual Abuse",
    artist: "Cough",
    year: "2010",
    snippetSrc: "public/Audio/Mind-Collapse-Snippet.mp3",
    fullSongSrc: "public/Audio/Mind-Collapse-Cough.mp3",
    albumCoverSrc: "public/Img/cough-cover.jpeg",
  },
  {
    title: "The Dull Blade",
    album: "Win Us Over",
    artist: "ASG",
    year: "2013",
    snippetSrc: "public/Audio/The-Dull-Blade-Snippet.mp3",
    fullSongSrc: "public/Audio/The-Dull-Blade-ASG.mp3",
    albumCoverSrc: "public/Img/asg-cover.jpeg",
  },
  {
    title: "Blank",
    album: "Take as Needed for Pain",
    artist: "Eyehategod",
    year: "1993",
    snippetSrc: "public/Audio/Blank-Snippet.mp3",
    fullSongSrc: "public/Audio/Blank-Eyehategod.mp3",
    albumCoverSrc: "public/Img/eyehategod-cover.jpeg",
  },
  {
    title: "Ghost Plains",
    album: "Opium Morals",
    artist: "Seven Sisters Of Sleep",
    year: "2013",
    snippetSrc: "public/Audio/Ghost-Plains-Snippet.wav",
    fullSongSrc: "public/Audio/Ghost-Plains-Seven-Sisters-of-Sleep.mp3",
    albumCoverSrc: "public/Img/seven-sisters-of-sleep-cover.jpeg",
  },
  {
    title: "Dopethrone",
    album: "Dopethrone",
    artist: "Electric Wizard",
    year: "2000",
    snippetSrc: "public/Audio/Dopethrone-Snippet.mp3",
    fullSongSrc: "public/Audio/Dopethrone-Electric-Wizard.mp3",
    albumCoverSrc: "public/Img/electric-wizard-cover.jpeg",
  },
  {
    title: "On The Moutain At Dawn ",
    album: "Variations on a Theme",
    artist: "Om",
    year: "2005",
    snippetSrc: "public/Audio/On-The-Moutain-At-Dawn-Snippet.mp3",
    fullSongSrc: "public/Audio/On-the-Mountain-at-Dawn-Om.mp3",
    albumCoverSrc: "public/Img/Om-cover.jpeg",
  },
  {
    title: "Wings of Feather and Wax",
    album: "Killer Be Killed",
    artist: "Killer Be Killed",
    year: "2014",
    snippetSrc: "public/Audio/Wings-Of-Feather-And-Wax-Snippet.mp3",
    fullSongSrc: "public/Audio/Wings-Of-Feather-And-Wax-Killer-Be-Killed.mp3",
    albumCoverSrc: "public/Img/killer-be-killed-cover.jpeg",
  },
  {
    title: "Lost in the Hive",
    album: "Helium Head",
    artist: "Mutoid Man",
    year: "2013",
    snippetSrc: "public/Audio/Lost-In-The-Hive-Snippet.mp3",
    fullSongSrc: "public/Audio/Lost-in-the-Hive-Mutoid-Man.mp3",
    albumCoverSrc: "public/Img/mutoid-man-cover.jpeg",
  },
  {
    title: "Prehistoric Dog",
    album: "Red Fang",
    artist: "Red Fang",
    year: "2009",
    snippetSrc: "public/Audio/Prehistoric-Dog-Snippet.mp3",
    fullSongSrc: "public/Audio/Prehistoric-Dog-Red Fang.mp3",
    albumCoverSrc: "public/Img/red-fang-cover.jpeg",
  },
  {
    title: "Living to Try",
    album: "Crestfallen",
    artist: "Weltesser",
    year: "2017",
    snippetSrc: "public/Audio/Living-To-Try-Snippet.mp3",
    fullSongSrc: "public/Audio/Living-To-Try-Weltesser.mp3",
    albumCoverSrc: "public/Img/weltesser-cover.jpeg",
  },
  {
    title: "Madness of An Architecht",
    album: "De Vermis Mysteriis",
    artist: "High On Fire",
    year: "2012",
    snippetSrc: "public/Audio/Madness-Of-An-Architecht-Snippet.mp3",
    fullSongSrc: "public/Audio/Madness-Of-An-Architecht-High-On-Fire.mp3",
    albumCoverSrc: "public/Img/hight-on-fire-cover.jpeg",
  },
  {
    title: "Prey",
    album: "Volume One",
    artist: "Sleep",
    year: "1993",
    snippetSrc: "public/Audio/Prey-Sleep-Snippet.mp3",
    fullSongSrc: "public/Audio/Prey-Sleep.mp3",
    albumCoverSrc: "public/Img/sleep-cover-jpeg.jpg",
  },
  {
    title: "Battle in the Swamp",
    album: "Monos",
    artist: "Conan",
    year: "2015",
    snippetSrc: "public/Audio/Battle-In-The-Swamp-Snippet.mp3",
    fullSongSrc: "public/Audio/Battle-In-The-Swamp-Conan.mp3",
    albumCoverSrc: "public/Img/conan-cover.jpeg",
  },
  {
    title: "Losing Battle",
    album: "Axe to Fall",
    artist: "Converge",
    year: "2009",
    snippetSrc: "public/Audio/Losing-Battle-Snippet.mp3",
    fullSongSrc: "public/Audio/Losing-Battle-Converge.mp3",
    albumCoverSrc: "public/Img/converge-cover.jpeg",
  },
  {
    title: "Manifest Decimation",
    album: "Manfifest Decimation",
    artist: "Power Trip",
    year: "2013",
    snippetSrc: "public/Audio/Manifest-Decimation-Snippet.mp3",
    fullSongSrc: "public/Audio/Manifest Decimation-Power-Trip.mp3",
    albumCoverSrc: "public/Img/power-trip-cover.jpeg",
  },
  {
    title: "Wolverine Blues",
    album: "Wolverine Blues",
    artist: "Entombed",
    year: "1993",
    snippetSrc: "public/Audio/Wolverine-Blues-Snippet.mp3",
    fullSongSrc: "public/Audio/Wolverine-Blues-Entombed.mp3",
    albumCoverSrc: "public/Img/entombed-cover.jpeg",
  },
  {
    title: "One Hit Two Hit",
    album: "Only Ghosts",
    artist: "Red Fang",
    year: "2016",
    snippetSrc: "public/Audio/One-Hit-Two-Hit-Snippet.mp3",
    fullSongSrc: "public/Audio/One-Hit-Two-Hit-Red-Fang.mp3",
    albumCoverSrc: "public/Img/red-fang-2-cover.jpeg",
  },
  {
    title: "Tired of Sex",
    album: "Pinkerton",
    artist: "Weezer",
    year: "1996",
    snippetSrc: "public/Audio/Tired-Of-Sex-Snippet.mp3",
    fullSongSrc: "public/Audio/Tired-Of-Sex-Weezer.mp3",
    albumCoverSrc: "public/Img/weezer-cover.jpeg",
  },
];
console.log(songsInfo.length);
let userScore = 0;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Event Listeners
playBtn.addEventListener("click", playCurrentTrack);
pauseBtn.addEventListener("click", pauseCurrentTrack);
audioEl.addEventListener("ended", () => {
  playBtn.classList.remove("hide-icon");
  pauseBtn.classList.add("hide-icon");
  recordIcon.classList.remove("record-spin");
  if (isIntervalRunning == false) {
    songEnded(songsInfo);
  }
});
nextRoundBtn.addEventListener("click", () => {
  nextRound(songsInfo);
});

optionsContainer.addEventListener("click", showAns);

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", playAgain);

window.addEventListener("load", () => {
  highScores.map((scores) => {
    const newScoreli = document.createElement("li");
    highScoreOl.appendChild(newScoreli);
    newScoreli.innerHTML = `${scores.name}&nbsp;&nbsp;&nbsp;${scores.score}`;
  });
  /*  if (highScores.length < 1) {
    clearScoresBtn.classList.add("hide-icon");
  } else {
    clearScoresBtn.classList.remove("hide-icon");
  } */
  setVolume();
});

gameRulesLink.addEventListener("click", () => {
  gameRulesDialog.showModal();
});

gameRulesClosebtn.addEventListener("click", () => {
  gameRulesDialog.close();
});

/* saveScoreBtn.addEventListener("click", addScore); */

/* clearScoresBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
}); */

/* highScoresContainer.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    allScoresOl.classList.remove("high-score-scroll");
    container.setProperty("overflow-y", "scroll");
  });
});
highScoresContainer.forEach((container) => {
  container.addEventListener("mouseleave", () => {
    allScoresOl.classList.add("high-score-scroll");
    container.setProperty("overflow-y", "hidden");
  });
}); */

for (let i = 0; i < carets.length; i++) {
  carets[i].addEventListener("click", changeScoresList);
}

///////////////////remove heart/////////////////////////////////////
let heartsId = 0;
function removeHeart() {
  if (heartsId < 4) {
    livesHearts[heartsId].classList.add("fa-regular");
    livesHearts[heartsId].classList.remove("fa-solid");
    heartsId++;
  }
}

//////////////////////////Volume Control/////////////////////////

volumeControlEl.addEventListener("change", setVolume);

function setVolume() {
  let volNum = volumeControlEl.value / 10;
  audioEl.volume = volNum;
}

////////////////////////Start Game////////////////////////////

function startGame() {
  optionsContainer.classList.remove("hide-icon");
  playBtn.classList.remove("hide-icon");
  startBtn.classList.add("hide-icon");
  startSongHeader.classList.remove("hide-icon");
  let randomSong = chooseRandomSong(songsInfo);
  fullSongEl.src = randomSong.fullSongSrc;
  songTitleResult.textContent = `Title: ${randomSong.title}`;
  songArtistResult.textContent = `Artist: ${randomSong.artist}`;
  songYearResult.textContent = `Year: ${randomSong.year}`;
  albumCoverResult.src = `${randomSong.albumCoverSrc}`;

  shuffle(songsInfo);
  setCorrectAns(songsInfo, randomSong);
}

////////////////////////Play Song////////////////////////////

function playCurrentTrack() {
  playBtn.classList.add("hide-icon");
  pauseBtn.classList.remove("hide-icon");
  recordIcon.classList.add("record-spin");
  startSongHeader.classList.add("hide-icon");
  audioEl.play();
}

////////////////////////Pause Song////////////////////////////

function pauseCurrentTrack() {
  playBtn.classList.remove("hide-icon");
  pauseBtn.classList.add("hide-icon");
  recordIcon.classList.remove("record-spin");
  startSongHeader.classList.remove("hide-icon");

  audioEl.pause();
}

///////////////////////////clear timer//////////////////////

function clearTimer() {
  timerHeader.textContent = "";
  countdownTimerEl.textContent = ``;
}

////////////////////////Next Round////////////////////////////
let roundCounter = 1;
let randomSong = chooseRandomSong(songsInfo);
function nextRound(array) {
  if (array.length > 4 && wrongAns <= 3) {
    playBtn.classList.remove("hide-icon");
    startSongHeader.classList.remove("hide-icon");
    clearTimer();
    clearInterval(countdown);
    resultDialog.close();
    roundCounter++;
    roundNumber.textContent = roundCounter;
    optionBtnArray.forEach((button) => {
      button.textContent = "";
    });
    optionBtnArray.forEach((button) => {
      if (button.hasAttribute("data-option-correct")) {
        button.removeAttribute("data-option-correct");
      }
    });
    let newRandomSong = chooseRandomSong(array);
    randomSong = newRandomSong;
    fullSongEl.src = newRandomSong.fullSongSrc;
    songTitleResult.textContent = `Title: ${newRandomSong.title}`;
    songArtistResult.textContent = `Artist: ${newRandomSong.artist}`;
    songYearResult.textContent = `Year: ${newRandomSong.year}`;
    albumCoverResult.src = `${newRandomSong.albumCoverSrc}`;
    audioEl.src = newRandomSong.snippetSrc;
    setCorrectAns(array, newRandomSong);
    clearTimer();
    return newRandomSong;
  }
  clearTimer();
  clearInterval(countdown);
  userTotalScore.textContent = userScore;
  if (userScore == 0) {
    resultDialog.close();
    endGameDialog.showModal();
    nameInput.classList.add("hide-icon");
    saveScoreBtn.classList.add("hide-icon");
    enterInit.textContent = "";
  }
  endGameDialog.showModal();
  resultDialog.close();
}

////////////////////////Play Again////////////////////////////

function playAgain() {
  location.reload();
}

///////////////////////Save Score //////////////////////////////

endGameForm.onsubmit = (e) => {
  e.preventDefault();
  addScore(nameInput.value.length);
};

function addScore(currVal) {
  const newScore = {
    score: userScore,
    name: nameInput.value,
  };

  if (
    savedIndicate.classList.contains("hide-icon") &&
    userScore > 0 &&
    currVal >= 3
  ) {
    fetch("/addscore", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScore),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    savedIndicate.classList.remove("hide-icon");

    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
}

/*   if (savedIndicate.classList.contains("hide-icon")) {
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    savedIndicate.classList.remove("hide-icon");
  } */

//////////////////////////////////////////////////////////////
let wrongAns = 0;
function showAns(e) {
  if (e.target.hasAttribute("data-option-correct")) {
    userOptionResult.textContent = "Correct!";
    userOptionResult.style.color = "green";
    resultDialog.showModal();
    switch (true) {
      case roundCounter <= 5:
        userScore += 10;
        break;
      case roundCounter <= 10:
        userScore += 25;
        break;
      case roundCounter <= 20:
        userScore += 50;
        break;
      case roundCounter <= 30:
        userScore += 75;
        break;
    }
    audioEl.pause();
    clearTimer();

    clearInterval(countdown);
    isIntervalRunning = false;
  } else if (!e.target.hasAttribute("data-option-correct")) {
    userOptionResult.textContent = "Incorrect!";
    userOptionResult.style.color = "red";
    clearTimer();
    clearInterval(countdown);
    audioEl.pause();
    isIntervalRunning = false;

    wrongAns++;
    removeHeart();
    resultDialog.showModal();
  }

  pauseBtn.classList.add("hide-icon");
  recordIcon.classList.remove("record-spin");
}
/////////////////////////////////////////////////////////////

let countdown;

////////////////////////Song Ends////////////////////////////
let isIntervalRunning = false;
function songEnded(array) {
  let timerCount = 61;

  timerHeader.textContent = "Answer Now!";

  countdown = setInterval(function () {
    isIntervalRunning = true;

    timerCount--;
    countdownTimerEl.textContent = `${timerCount}`;

    if (timerCount < 1) {
      clearInterval(countdown);
      isIntervalRunning = false;
      if (!resultDialog.open) {
        audioEl.pause();
        playBtn.classList.remove("hide-icon");
        pauseBtn.classList.add("hide-icon");
        recordIcon.classList.remove("record-spin");
        resultDialog.showModal();
        userOptionResult.textContent = "Times Up!";
        userOptionResult.style.color = "white";
      } else {
        clearInterval(countdown);
        isIntervalRunning = false;
      }
    } else if (array.length < 4 && resultDialog.open) {
      clearInterval(countdown);
      isIntervalRunning = false;

      endGameDialog.showModal();
    }
  }, 1000);
}
/////////////////////FISHER-YATES Shuffle Algorithm///////////////////////

function shuffle(array) {
  let i = array.length,
    j = 0,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

////////////////////////////////////////////////////////////

const shuffledSongs = shuffle(songsInfo);

//////////////////////Choose Random Song/////////////////////////

function chooseRandomSong(array) {
  if (array.length >= 5) {
    let randomSong = array.splice(
      Math.floor(Math.random() * array.length) | 0,
      1
    )[0];

    optionBtn.forEach((button, index) => {
      button.textContent = `${array[index].title} - ${array[index].artist}`;
    });
    return randomSong;
  }
}

/////////////////////Set Correct Answer////////////////////////

function setCorrectAns(array, randSong) {
  if (array.length >= 4) {
    let randomIndex = Math.floor(Math.random() * optionBtnArray.length);
    optionBtnArray[randomIndex].setAttribute("data-option-correct", "");
    let correctOption = document.querySelector("[data-option-correct]");
    correctOption.textContent = `${randSong.title} - ${randSong.artist}`;
    audioEl.src = randSong.snippetSrc;
  }
}

////////////////////////////Toggle scores list///////////////////////

function changeScoresList() {
  allScores.classList.toggle("hide-scores");
  localScores.classList.toggle("hide-scores");
}

////////////////////////////Enable score scrolling///////////////////////

if (allScoresOl.childElementCount > 17) {
  allScoresOl.classList.add("high-score-scroll");
}
