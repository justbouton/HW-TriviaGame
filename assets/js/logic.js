// Trivia game with questions that have multple choice answers, count down timer for each round, timer resets when button is click or time runs out. Display answer and image for three seconds on answer button click. Next round until out of questions. At end display results.

var card = $("#quizDisplay");
var countStartNumber = 3;

// Array to hold questions, answer, answers and response image
var questions = [
    {
        question: 'What command is used to make a new directory and sub folders?',
        answer: [
            'mkdir -p',
            'mkdir -d',
            'makedir'
        ],
        correctAnswer: 'mkdir -p',
        image: "IMAGE MISSING"
    }, {
        question: 'How do you change directory in Linux?',
        answer: [
            'changdir',
            'cd',
            'changedirectory'
        ],
        correctAnswer: 'cd',
        image: "IMAGE MISSING"
    }, {
        question: 'What command do you use to delete a directory?',
        answer: [
            'remove',
            'delete',
            'rm'
        ],
        correctAnswer: 'rm',
        image: "IMAGE MISSING"
    }, {
    question: 'How do you list contents of a folder?',
    answer: [
        'list',
        'listcontent',
        'ls'
    ],
    correctAnswer: 'ls',
    image: "IMAGE MISSING"
    },
];

// Global varible for timer
var timer;

var game = {
// Varibles correct, incorrect

questions: questions,
questionIndex: 0,
counter: countStartNumber,
correct: 0,
incorrect: 0,

// Countdown function
    // Select the text of the counter area
    // if the couter equals zero
    // console.log time up
    // game.timeUP()
    countdown: function() {

        game.counter--;
        $("#counter").text(game.counter);
        if (game.counter === 0) {
            console.log("OUT OF TIME");
            game.timeUp();
        }
    },

// LoadQuestion function
    // setInterval time of game.countdown for one sec.
    // Select card.html, add h2 with questions[this.questionIndex].question
    // Loop through each possible answer, card append each button with data-name and display of each possible answer.
    loadQuestion: function() {
        // timer setInterval for game countdown 1000ms = 1s 
        timer = setInterval(game.countdown, 1000);
        // card 
        card.html("<h2>" + questions[0].question + "</h2>");
    
        for (var i = 0; i < questions[this.questionIndex].answer.length; i++) {
          card.append("<button class='answer-button' id='button' data-name='" + questions[this.questionIndex].answer[i]
          + "'>" + questions[this.questionIndex].answer[i] + "</button>");
        }
      },

// NextQuestion function
// game.counter = countStartNumber
// Select game counter text of counter area
// game.questionIndex++
// game.loadQuestion().

// TimeUp function
// clearInterval(timer)
// Select game counter html area, replace with 
// card.html h2 out of time
// card.append h3 "The correct answer was" + questions[this.questionIndex].correctAnswer 
// card.append img
// if game.questionIndex === questions.length -1
// setTimeout(game.results, 3 * 1000)
// else setTimeout(game.nextQuestion, 3 * 1000)
      timeUp: function() {

          clearInterval(timer);
          
          $("#counter").html(game.counter);

          card.html("<h2>Out of time!</h2>");
          card.append("<h3>The correct answer was: " + questions[this.questionIndex].correctAnswer);
          card.append("<img src='" + questions[this.questionIndex].image + "' />");

          if (game.questionIndex === questions.length -1) {
              setTimeout(game.results, 3 * 1000);
          } else {
              setTimeout(game.nextQuestion, 3 * 1000);
          }
      }

// Results function
// clearInterval(timer)
// Select card.html, add h2 with All done, here's your results
// card.append h3 "Correct" game.correct
// card.append h3 "Incorrect" game.correct
// card.append h3 "Unaswered" game.correct
// card.append start over?

// Clicked function(e)
// clearInterval(timer)
// If the correct answer is equal to the e.target attribute
// this.answeredCorrectly()
// else this.answeredIncorrectly

// AnsweredIncorrectly 
// When answered clearInterval(timer)
// game.incorrect++
// card.html h2 "Sorry that was incorrect"
// card append h3 "the correct answer was" + questions[game.questionIndex].image
// If game.questionIndex equals questions.length - 1, setTimeout(game.results, 3 * 1000)
// Else setTimeout(game.nextQuestion, 3 * 1000)

// AnsweredCorrectly 
// When answered clearInterval(timer)
// game.correct++
// card.html displays h2 Correct!
// If game.questionIndex equals questions.length - 1, setTimeout(game.results, 3 * 1000)
// Else setTimeout(game.nextQuestion, 3 * 1000)

// Reset function
// reset: function() {
//     this.questionIndex = 0:
//     this.counter = counterStartNumber:
//     this.correct = 0;
//     this.incorrect = 0;
//     this.loadQuestion();
// }


} // End of game var

// CLICK EVENTS

// Start
$(document).on("click", "#start", function() {
    $("#sub-container").prepend("<h2>Time remaining: <span id='counter'>30</span> Seconds</h2>")
    game.loadQuestion();
});

// Start over
$(document).on("click", "#startOver", function() {
    // game.reset()
});

// Answer clicked
$(document).on("click", ".answerButton", function(e) {
    // game.clicked(e);
});
