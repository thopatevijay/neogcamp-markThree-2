var readlineSync = require("readline-sync");

var score = 0;

var questions = [
    {
        question: "Who invented Javascript? ",
        answer: "Brendan Eich"
    },
    {
        question: "Who invented Node.js ? ",
        answer: "Ryan Dahl"
    },
    {
        question: "React was originally created by ? ",
        answer: "Jordan Walke"
    },
    {
        question: "Who invented HTML ? ",
        answer: "Tim Berners-Lee"
    },
    {
        question: "Is JavaScript similar to Java?? ",
        answer: "No"
    }
];


function welcome() {
    var userName = readlineSync.question("What is your name? ");

    console.log("Welcome " + userName + " to DO YOU KNOW me?")
}

function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log('right');
        score += 1;
    } else {
        console.log('wrong');
    }

    console.log('current score: ', score);
    console.log('-------------------');
}

welcome();
game();