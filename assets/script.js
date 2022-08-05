const qArray = ["Javascript is to an html document using which tag?",
    "In the context of web development, what does DOM stand for?",
    "Which keyword will declare a variable in Javascript?",
    "Which item below is a Boolean data type?",
    "Which Javascript method can be used to change display font?",
    "etc"];
const choiceArray = [
    q0arr = ["<style>", "<link>", "<script>", "<cookies>"],
    q1arr = ["Delicious Organic Meals", "Document Object Model", "Data Orientation Map", "Document Organization Marker"],
    q2arr = ["'let'", "'define'", "'function'", "'JSON'"],
    q3arr = ["Happy Friday!", "4893.35", "true", "NaN"],
    q4arr = ["setAttribute", "changeFont", "createElement", "textContent"],
    q5arr = ["Chips", "Candy", "Yum yum yuafdsgm", "so good!"],
    q6arr = ["Chipasdfgs", "Candy", "Yum yum yum", "so good!"],
    q7arr = ["Chips", "Candy", "Yum yumasfdg yum", "so good!"],
    q8arr = ["Chips", "Candy", "Yum yum yum", "so good!"],
    q9arr = ["Chips", "Candy", "Yum yum yum", "so good!"],
]
const rightAnswers = [ choiceArray[0][2], choiceArray[1][1], choiceArray[2][0], choiceArray[3][3] ];
// HOPEFULLY NOT NECESSARY -> const wrongAnswers = [];


// START BUTTON + TIMER + Question page index
let startBtn = document.getElementById("startBtn");
let timeEl = document.getElementById("timediv");
let question = document.querySelector(".question");
let listEl = document.querySelector(".choices");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let liveCheck = document.getElementById("liveCheck");
let secondsLeft = 60;
let i = 0;  


document.querySelector(".qPages").hidden = true;

startBtn.addEventListener("click", function startQuiz() {
    document.querySelector(".landing").hidden = true;
    startTimer();
    generateQuestion();
})



// Generate questions
function generateQuestion() {
    document.querySelector(".qPages").hidden = false;
   
    question.textContent = qArray[i];

// Generate listed answer buttons using const arrays

    btn1.textContent = choiceArray[i][0];
    btn2.textContent = choiceArray[i][1];
    btn3.textContent = choiceArray[i][2];
    btn4.textContent = choiceArray[i][3];
        
// Add listeners for next function
    btn1.addEventListener("click", Next);
    btn2.addEventListener("click", Next);
    btn3.addEventListener("click", Next);
    btn4.addEventListener("click", Next);

// Add right/wrong answer listeners
    if( rightAnswers.includes(btn1.textContent)) {
        btn1.addEventListener("click", rightAns);
    }
    else{
        btn1.addEventListener("click", wrongAns);
    }
    if( rightAnswers.includes(btn1.textContent)) {
        btn2.addEventListener("click", rightAns);
    }
    else{
        btn2.addEventListener("click", wrongAns);
    }
    if( rightAnswers.includes(btn1.textContent)) {
        btn3.addEventListener("click", rightAns);
    }
    else{
        btn3.addEventListener("click", wrongAns);
    }
    if( rightAnswers.includes(btn1.textContent)) {
        btn4.addEventListener("click", rightAns);
    }
    else{
        btn4.addEventListener("click", wrongAns);
    }
}

function Next(){
    i++;
    generateQuestion();
    // event.stopPropagation;
}

function rightAns(){
    liveCheck.textContent = "Correct!";
}

function wrongAns(){
    liveCheck.textContent = "Wrong!";
}


// ADD RIGHT/WRONG ANSWER LOGIC




    // buttonEl.addEventListener("click", function(){
    //     i++;
    //     generateQuestions();
    //     })



console.log(i);

function startTimer() {
    let timerInterval = setInterval(function() {
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