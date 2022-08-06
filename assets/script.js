const qArray = [
    "Javascript is called in an html document using which tag?",
    "In the context of web development, what does DOM stand for?",
    "Which keyword will declare a variable in Javascript?",
    "Which item below is a Boolean data type?",
    "Which Javascript method can be used to change display font?",
    "What does the triple equal sign (===) indicate in Javascript?",
    "Select the choice with correct syntax for opening a Javascript 'if' statement?",
    "What extension do Javascript files use?"
];

const choiceArray = [
    q0arr = ["<style>", "<link>", "<script>", "<cookies>"],
    q1arr = ["Delicious Organic Meals", "Document Object Model", "Data Orientation Map", "Document Organization Marker"],
    q2arr = ["'let'", "'define'", "'function'", "'JSON'"],
    q3arr = ["Happy Friday!", "4893.35", "true", "NaN"],
    q4arr = ["setAttribute", "changeFont", "createElement", "textContent"],
    q5arr = ["Equal values", "Parse element", "Strict equality (type and value)", "True"],
    q6arr = ["if x, then {", "if {x},", "if (x) {", "if 'x' {"],
    q7arr = [".html", ".js", ".css", ".java"]
]
const rightAnswers = [ choiceArray[0][2], choiceArray[1][1], choiceArray[2][0], choiceArray[3][2], choiceArray[4][0], choiceArray[5][2], choiceArray[6][2], choiceArray[7][1] ];
// HOPEFULLY NOT NECESSARY -> const wrongAnswers = [];


// START BUTTON + TIMER + Question page index
let startBtn = document.getElementById("startBtn");
let timeEl = document.getElementById("timediv");
let question = document.querySelector(".question");
let listEl = document.querySelector(".choices");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let liveCheck = document.getElementById("liveCheck");
let secondsLeft = 60;
let i = 0;  


document.querySelector(".qPages").hidden = true;

startBtn.addEventListener("click", function startQuiz() {
    document.querySelector(".landing").hidden = true;
    document.querySelector(".qPages").hidden = false;
    startTimer();
    generateQuestion();
})



// Generate questions
function generateQuestion() {


    question.textContent = qArray[i];

// Generate listed answer buttons using const arrays

    btn0.textContent = choiceArray[i][0];
    btn1.textContent = choiceArray[i][1];
    btn2.textContent = choiceArray[i][2];
    btn3.textContent = choiceArray[i][3];
        
// Add listeners for next function
    // btn1.addEventListener("click", Next);
    // btn2.addEventListener("click", Next);
    // btn3.addEventListener("click", Next);
    // btn4.addEventListener("click", Next);

// Add right/wrong answer listeners
    if (rightAnswers.includes(btn0.textContent)) {
        btn0.addEventListener("click", rightAns);
    } else{
        btn0.addEventListener("click", wrongAns);
    }

    if( rightAnswers.includes(btn1.textContent)) {
        btn1.addEventListener("click", rightAns);
    } else{
        btn1.addEventListener("click", wrongAns);
    }

    if( rightAnswers.includes(btn2.textContent)) {

        btn2.addEventListener("click", rightAns);
    } else{
        console.log(btn2.textContent);
        btn2.addEventListener("click", wrongAns);
    }

    if( rightAnswers.includes(btn3.textContent)) {
        btn3.addEventListener("click", rightAns);
    } 
    else{
        btn3.addEventListener("click", wrongAns);
    }

}

// function Next(){
//     i++;
//     generateQuestion();
//     // event.stopPropagation;
// }

function rightAns(){
    liveCheck.textContent = "Correct! ✅ 😀";
    console.log("yes!");
    i++;
    if (i>7) {
        GameOver();
    }
    btn0.removeEventListener("click", rightAns);
    btn0.removeEventListener("click", wrongAns);
    btn1.removeEventListener("click", rightAns);
    btn1.removeEventListener("click", wrongAns);
    btn2.removeEventListener("click", rightAns);
    btn2.removeEventListener("click", wrongAns);
    btn3.removeEventListener("click", rightAns);
    btn3.removeEventListener("click", wrongAns);
    generateQuestion();
}

function wrongAns(){
    liveCheck.textContent = "Wrong! ❌ 😢";
    secondsLeft = secondsLeft - 10;
    console.log("nope!!");
    i++;
    if (i>7) {
        GameOver();
    }
    btn0.removeEventListener("click", rightAns);
    btn0.removeEventListener("click", wrongAns);
    btn1.removeEventListener("click", rightAns);
    btn1.removeEventListener("click", wrongAns);
    btn2.removeEventListener("click", rightAns);
    btn2.removeEventListener("click", wrongAns);
    btn3.removeEventListener("click", rightAns);
    btn3.removeEventListener("click", wrongAns);
    generateQuestion();
}


function startTimer() {
    let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft + " seconds left";
        
    if(secondsLeft <= 10) {
        timeEl.setAttribute("style", "color: darkred; font-size: 20px; font-weight: bold");
    }

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      GameOver();
    }
    }, 1000);
};

function GameOver() {
    let 
    document.querySelector(".qPages").hidden = true;
    document.getElementById("timediv").hidden = true;
    liveCheck.textContent = "GAME OVER";

}