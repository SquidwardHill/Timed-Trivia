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
let goodGuess;
let badGuess;
let seconds;
let timeLeft;

//Check to see if game is running, if so- reset and go to next question
function isGameRunning(){
    if (triviaIndex < 2){
        //gameRunning = true;
        reset();
    }
    else {
        //gameRunning = false;
       // gameOver();
    }
}

$play.click(function(){
    triviaIndex = 0;
    $question.text(questionsArr[triviaIndex].question);
    reset();
})

function reset(){
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
    $a.text(q.options.a);
    $b.text(q.options.b);
    $c.text(q.options.c);
    $d.text(q.options.d);
}

//create a countdown timer and write to DOM
function countdown() {
    if (timeLeft == 0) {
      clearTimeout(seconds);
      wrongGuess();
      //time runs out = loss
    } else {
      $timer.text(timeLeft);
      timeLeft--;
    }
}

$option.on('click', function(){
    if($guess == correctAnswer){
        goodGuess = $(this);
        goodGuess.addClass('correct');
        correctGuess();
    }
    else {
        badGuess = $(this);
        badGuess.addClass('wrong');
        wrongGuess();
    }
});

function correctGuess(){
    triviaIndex++;
    correctCount++;
    $wins.text(correctCount);
    setTimeout(function(){
        goodGuess.removeClass('correct');
        isGameRunning();  
    }, 5000);
    //resets game loop: check to see if the game should continue running
}

function wrongGuess(){
    triviaIndex++;
    wrongCount++;
    $losses.text(wrongCount);
    setTimeout(function(){
        badGuess.removeClass('wrong');
        isGameRunning();  
    }, 5000);
    //resets game loop: check to see if the game should continue running
}

//make this better than an alert...
function gameOver(){
    alert('You got ' + correctCount + 'questions right, and ' + wrongCount + 'questions wrong.')
    $button.text('Play Again?');
}
