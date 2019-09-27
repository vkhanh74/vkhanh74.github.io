$(document).ready(function () {
    // create questions here
    var questions = [
        {text: "Hyper Text Markup Language Stand For?", choices: ["JavaScript", "XHTML","CSS", "HTML"], answer: "HTML"},
        {text: "Which language is used for styling web pages?", choices: ["HTML", "JQuery", "CSS", "XML"], answer: "CSS"},
        {text: "Which is not a JavaScript Framework?", choices: ["Python Script", "JQuery","Django", "NodeJS"], answer: "Django"},
        {text: "Which is used for Connect To Database?", choices: ["PHP", "HTML", "JS", "All"], answer: "PHP"},
        {text: "Webdevtrick.com is about..", choices: ["Web Design", "Graphic Design", "SEO & Development", "All"], answer: "All"}
    ];

    function Quiz(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    // create quiz
    var quiz = new Quiz(questions);    
    
    function getQuestionIndex() {
        return Quiz.questions[Quiz.questionIndex];
    }

    // Quiz.prototype.getQuestionIndex = function() {
    //     return this.questions[this.questionIndex];
    // }

    function guess(answer) {
        if(Quiz.getQuestionIndex().isCorrectAnswer(answer)) {
            Quiz.score++;
        }
    
        Quiz.questionIndex++;
    }
    
    // Quiz.prototype.guess = function(answer) {
    //     if(this.getQuestionIndex().isCorrectAnswer(answer)) {
    //         this.score++;
    //     }
    
    //     this.questionIndex++;
    // }
    
    function isEnded() {
        return Quiz.questionIndex === Quiz.questions.length;
    }

    // Quiz.prototype.isEnded = function() {
    //     return this.questionIndex === this.questions.length;
    // }
    
    function isCorrectAnswer(choice) {
        return questions.answer === choice;
    }
    
    
    // Question.prototype.isCorrectAnswer = function(choice) {
    //     return this.answer === choice;
    // }
    
    
    function populate() {
        if(quiz.isEnded()) {
            showScores();
        }
        else {
            // show question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
    
            // show options
            var choices = quiz.getQuestionIndex().choices;
            for(var i = 0; i < choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
                guess("btn" + i, choices[i]);
            }
    
            showProgress();
        }
    };
    
    function guess(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            populate();
        }
    };
    
    
    function showProgress() {
        var currentQuestionNumber = quiz.questionIndex + 1;
        var element = document.getElementById("progress");
        element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    };
    
    function showScores() {
        var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    };
    
    // display quiz
    populate();
    
    
});