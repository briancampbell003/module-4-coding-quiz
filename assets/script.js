
// START BUTTON + TIMER
var startBtn = document.getElementById("startBtn");

var timeEl = document.getElementById("timediv");
var secondsLeft = 60;

startBtn.addEventListener("click", function startQuiz() {
    document.querySelector(".landing").hidden = true;

    var question1 = document.querySelector(".question");
    question1.textContent = "Where's my car?";

    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft + " seconds left";
        
    if(secondsLeft <= 10) {
        timeEl.setAttribute("style", "color: darkred; font-size: 20px; font-weight: bold");
    }

    // if(secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   // Calls game over function
    //   gameOver();
    // }
    }, 1000);
});