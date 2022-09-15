var readlineSync = require("readline-sync");

var score = 0;

var questions = [
    {
        question: "Who invented Javascript? ",
        answer: "Brendan Eich",
        source: "https://g.co/kgs/AQFmPF"
    },
    {
        question: "Who invented Node.js ? ",
        answer: "Ryan Dahl",
        source: "https://g.co/kgs/UhouDy"
    },
    {
        question: "React was originally created by ? ",
        answer: "Jordan Walke",
        source: "https://g.co/kgs/NExV57"
    },
    {
        question: "Who invented HTML ? ",
        answer: "Tim Berners-Lee",
        source: "https://g.co/kgs/JJ9QBT"
    },
    {
        question: "Is JavaScript similar to Java?? ",
        answer: "No",
        source: "https://www.geeksforgeeks.org/difference-between-java-and-javascript/"
    }
];

var highScores = [
    {
        name: 'Jay',
        score: 4
    },
    {
        name: 'John',
        score: 5
    }
];

function welcome() {
    var userName = readlineSync.question("What is your name? ");

    console.log("Welcome " + userName + " , Do you know about web development languages? ")
};

function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer, currentQuestion.source)
    }
};

function play(question, answer, source) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log('right');
        score += 1;
    } else {
        console.log('wrong');
        console.log('Currect answer is: ' + answer);
        console.log(`Don't worry, let's have a look here:  ${source}`);
    }

    console.log('current score: ', score);
    console.log('-------------------');
};

function showScore() {
    console.log('You scored: ', score);

    console.log("Check out the high scores, if you should be there ping me and   I'll update it");

    highScores.map(score => console.log(score.name, " : ", score.score));
};

welcome();
game();
showScore();