let score = document.getElementById('score');
let totalScore = document.getElementById('totalScore');
let count = 0;
let scoreCount = 0;
let duration = 0;
let questionGroup = document.querySelectorAll('.question_group');
let questionAnswerRow = document.querySelectorAll('.question_group .question_answer_row input');
let userScore = 0;
let start = document.getElementById("startButton");
let end = document.getElementById("endScreen");
let qCont = document.querySelector(".question-container");
const timerSpan = document.querySelector("#countdown");
let initials = document.getElementById("initials");


let intervalId;

let secondsLeft = 60;

const setSecondsLeft = function (value) {
  if (value < 0) {
    secondsLeft = 0;
  } else {
    secondsLeft = value;
  }
  timerSpan.textContent = secondsLeft;
};

const stopTimer = function () {
  clearInterval(intervalId);
};

startButton.addEventListener("click", function () {
  timerSpan.textContent = secondsLeft;
  intervalId = setInterval(function () {
    setSecondsLeft(secondsLeft - 1);
    if (secondsLeft === 0) {
      stopTimer();
      //alert("Ran out of time");
    }
  }, 1000);
 
});


startButton.onclick = function () {
    let div = document.getElementById('startScreen');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';

    }
    qCont.hidden = false;
};

questionAnswerRow.forEach(function (questionAnswerRow) {
    questionAnswerRow.addEventListener('click', function () {

        setTimeout(function () {
            next();
        }, 500)
        let valid = this.getAttribute("valid");
        if(valid == "valid"){
        scoreCount += 25;
        score.innerHTML = scoreCount;
        totalScore.innerHTML = scoreCount;
      }
      else{
        setSecondsLeft(secondsLeft - 15);
      }

    })


});






function next() {
    count += 1;
    if (count == 4) {
        qCont.style.display = 'none';
        theEnd();
    }
    else {
        for (var i = 0; i < questionGroup.length; i++) {
            questionGroup[i].className = 'question_group';
        }
        questionGroup[count].className = 'question_group active';
    }
}

function theEnd() {
    end.style.display = 'block';
    localStorage.setItem("totalScore, initials")
}

let
