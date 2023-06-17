$( document ).ready(function() {
    footer.textContent = "\u00A9 " + new Date().getFullYear() + " by Jemrin";
});

function startBreathing() {
  var inputContainer = document.getElementById("input-container");
  var timerContainer = document.getElementById("timer-container");
  var roundsInput = document.getElementById("rounds-input");
  var errorMessage = document.getElementById("error-message");
  var roundInfo = document.getElementById("round-info");
  var countdown = document.getElementById("countdown");
  var phaseInfo = document.getElementById("phase-info");
  var footer = document.getElementById("footer");

  var rounds = parseInt(roundsInput.value);

  if (rounds <= 0 || isNaN(rounds)) {
    errorMessage.textContent = "Bitte geben Sie eine Zahl größer als Null ein.";
    return;
  } else {
    errorMessage.textContent = "";
  }

  inputContainer.style.display = "none";
  timerContainer.style.display = "block";
  footer.style.display = "block"; // Zeige den Footer an

  var currentRound = 0;
  var phase = "";

  function startRound() {
    currentRound++;
    roundInfo.textContent = "Aktuelle Runde: " + currentRound + " von " + rounds;
    countdown.textContent = "4";
    phaseInfo.textContent = "";

    if (currentRound <= rounds) {
      phaseInfo.textContent = "Einatmen";
      playSound("inhale-sound", 4, function () {
        phaseInfo.textContent = "Halten";
        playSound("hold-sound", 4, function () {
          phaseInfo.textContent = "Ausatmen";
          playSound("exhale-sound", 4, function () {
            phaseInfo.textContent = "Halten";
            playSound("hold-sound", 4, function () {
              if (currentRound === rounds) {
                playSound("end-sound", 0, function () {
                  inputContainer.style.display = "block";
                  timerContainer.style.display = "none";
                  roundsInput.value = "";
                  footer.style.display = "none"; // Verstecke den Footer nach Abschluss
                });
              } else {
                startRound();
              }
            });
          });
        });
      });
    }
  }

  playSound("start-sound", 10, function () {
    startRound();
  });
}

function playSound(soundId, duration, callback) {
  var sound = document.getElementById(soundId);
  sound.currentTime = 0;
  sound.play();
  startTimer(duration, callback);
}

function startTimer(duration, callback) {
  var countdown = document.getElementById("countdown");
  countdown.textContent = duration;

  var interval = setInterval(function () {
    duration--;
    countdown.textContent = duration;
    if (duration <= 0) {
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, 1000);
}
