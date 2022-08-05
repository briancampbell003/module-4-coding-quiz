const qArray = ["q1 food?",
    "q2",
    "q3",
    "q4",
    "q5",
    "etc"];
const choiceArray = [
    q1arr = ["Chips", "Casfdgandy", "Yum yum yum", "so good!"],
    q2arr = ["Chasdgps", "Candy", "Yumadfsg yum yum", "sasfdgo good!"],
    q3arr = ["Chgasips", "Canadfgdy", "Yumagfs yum yum", "sadfgo good!"],
    q4arr = ["Chips", "Candasdgfy", "Yum yadfhgum yum", "sasfgo good!"],
    q5arr = ["Chdfgahfps", "Candy", "Yum yum yum", "so good!"],
    q6arr = ["Chips", "Candy", "Yum yum yuafdsgm", "so good!"],
    q7arr = ["Chipasdfgs", "Candy", "Yum yum yum", "so good!"],
    q8arr = ["Chips", "Candy", "Yum yumasfdg yum", "so good!"],
    q9arr = ["Chips", "Candy", "Yum yum yum", "so good!"],
    q10arr = ["Chips", "Candy", "Yum yum yum", "so good!"],
]
const rightAnswers = [ qArray[1], qArray[3], qArray[5], choiceArray[0][2]];
// HOPEFULLY NOT NECESSARY -> const wrongAnswers = [];


// START BUTTON + TIMER + Question page index
var startBtn = document.getElementById("startBtn");
var timeEl = document.getElementById("timediv");
var secondsLeft = 60;
var i = 0;  

startBtn.addEventListener("click", function startQuiz() {
    document.querySelector(".landing").hidden = true;
    generateQuestions();
    startTimer();
})



// Generate questions
function generateQuestions() {
  
    var question = document.querySelector(".question");
    question.textContent = qArray[i];

// Generate listed answer buttons using const arrays
    var listEl = document.querySelector(".choices");

    for (let x = 0; x < choiceArray[i].length; x++) {
        var liEl = document.createElement("li");
        listEl.appendChild(liEl);
        var buttonEl = document.createElement("button");
        liEl.appendChild(buttonEl);

        buttonEl.textContent = choiceArray[i][x];
        // buttonEl.addEventListener("click", NextQuestion());
    }

}

// function NextQuestion(){
//     var question = document.querySelector(".question");
//     question.textContent = qArray[i];
//     i++;
//     generateQuestions();
// }




    // buttonEl.addEventListener("click", function(){
    //     i++;
    //     generateQuestions();
    //     })



console.log(i);
function startTimer() {
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
};