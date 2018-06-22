//DOM ELEMENTS
let $question = $('#question');
let $correctAnswer = $('#correctAnswer');
let $guess = $('#guess');
let $option = $('.option');
let $timer = $('#timer');
let $wins = $('#wins');
let $losses = $('#losses');
let $play = $('#play');
let $a = $('#a');
let $b = $('#b');
let $c = $('#c');
let $d = $('#d');

var questionsArr = [
    {
        question : 'Q1 question whats dis?',
        options : {
            a : 'option-a',
            b : 'option-b',
            c : 'option-c',
            d : 'option-d',
        },
        answer : 'b'
    },
    {
        question : 'Q2 question whats dis?',
        options : {
            a : 'option-a',
            b : 'option-b',
            c : 'option-c',
            d : 'option-d',
        },
        answer : 'a'
    },
    {
        question : 'Q3 question whats dis?',
        options : {
            a : 'option-a',
            b : 'option-b',
            c : 'option-c',
            d : 'option-d',
        },
        answer : 'd'
    }
]

let gameRunning;
let triviaIndex;
let answer;
let options;
let correctAnswer;
let timer;
let correctCount = 0;
let wrongCount = 0;
let seconds;
let timeLeft;

function isGameRunning(){
    if (triviaIndex < 2){
        //if the question index is less than 6, then give the next question
        gameRunning = true;
        reset();
    }
    else {
        gameRunning = false;
    }
}

$play.click(function(){
    triviaIndex = 0;
    $question.text(questionsArr[triviaIndex].question);
    reset();
})

function reset(){
    //let triviaCounter = 0;
    timeLeft = 5;
    countdown();
    nextQuestion(triviaIndex);
    seconds = setInterval(countdown, 1000);
}

function nextQuestion(triviaIndex){
    let q = questionsArr[triviaIndex];
    $question.text(q.question);
    answer = q.answer;
    //$answer.text(answer);
    $a = q.options.a;
    $b = q.options.b;
    $c = q.options.c;
    $d = q.options.d;
}

//create a countdown timer and write to DOM
function countdown() {
    if (timeLeft == 0) {
      clearTimeout(seconds);
      wrongGuess();
      //loss for time out
      //check to see if game is running
    } else {
      //update time in DOM
      //listen for user input
      $timer.text(timeLeft);
      timeLeft--;
    }
}

$option.on('click', function(){
    if($guess == correctAnswer){
        correctGuess();
    }
    else {
        wrongGuess();
    }
});

function correctGuess(){
    triviaIndex++;
    correctCount++;
    $wins.text(correctCount);
    isGameRunning();  
}

function wrongGuess(){
    triviaIndex++;
    wrongCount++;
    $losses.text(wrongCount);
    isGameRunning();
}

/*function gameOver(){
    if (triviaCounter === 8){
        alert('You got ' + correctCount + 'questions right, and ' + wrongCount + 'questions wrong.')
    }
    else {
        gameRunning = true;
    }
}*/
