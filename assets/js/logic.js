
// Waits until the page has loaded all content before running below:
$(document).ready()


///// VARIBLES /////
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var countDown = 0;


///// ARRAYS /////  // Array to hold questions, choices, answers
var questionsArr = [
		{
			prompt: 'If you are shooting a photo and want to get a greater depth of field in the image, Which F stop would you shoot?',
			choices: [
                    'F2.8', 
                    'F16', 
                    'F7.1', 
                    'F4'
			],
			correctIndex: 1
		},{
			prompt: 'What is the typical shutter speed when using a flash?',
			choices: [
                    '1/200', 
                    '1/60', 
                    '1/1000', 
                    '1/30'
			], 
			correctIndex: 1
		},{
			prompt: '?',
			choices: [
				'1',
				'2',
				'3'
			],
			correctIndex: 2
		}
    ];
    
// * // TODO a function for loop to select q1, q2, etc.
// * // BONUS create a function random choice array selector q1-q9.
// * // BONUS add catagories 



// TODO CREATE TIMER
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {
  time: 20,

  reset: function() {
    stopwatch.time = 20;
    // DONE: Change the "timer" div to "20."
    $("#timer").text("20");
  },

  start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },

  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {
    // DONE: decrement time by 1, remember we cant use "this" here.
    stopwatch.time--;
    // DONE: Use the variable we just created to show the converted time in the "timer" div.
    $("#timer").text(stopwatch.time);
    console.log(stopwatch.time)
  }
};


// Clicking start; initalize the countDownTimer, fade the start button, make 4 buttons appears as place holders for each question.
    $("#startButton").click(function() { 
        

// On click select #startButton addClass 'invisible' to hide start button
        // var hideStart; 
            hideStart = $("#startButton").addClass('invisible');
            // only show after start is pressed
            $("#question_Display").text(questionsArr[0].prompt)
            $("#button0_Display").text(questionsArr[0].answers) // Create for loop to dynamically create buttons and insert text
            displayButtons(); // toggleButtons 
            stopwatch.start; // start countDown
       

///// FUNCTIONS /////

    function displayButtons() { // Hides/displays buttons
        var buttons = $("button");
        for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('visible');
        }
    }


// TODO create dynamic array selector at random.
const qArr0 = questionsArr[0].choices //output renderButtons to buttonContainer div

// console.log(qArr0.length)

renderButtons() // May need to be moved
    function renderButtons() { // Create 4 buttons with for loop
        $("#buttonContainer").empty(); // Clear container before dynamically creating content
        var buttons = $("button");
        for (var i = 0; i < qArr0.length; i++) {
            // Then dynamicaly generating buttons for each item in the array
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            // console.log(qArr0[i])
            var a = $("<button>");
            // // Adding a class of movie to our button
            a.addClass("button fadeIn");
            // Adding a data-attribute
            a.attr("data-index",[i]);
            // Providing the initial button text
            a.text(qArr0[i]);
            // Adding the button to the HTML
            $("#buttonContainer").append(a);
        } 
    }

const correctIndex = questionsArr[0].correctIndex
console.log("CorrectIndex: " + correctIndex)

        $('.button').click(function() {
            var d = $(this).data('index')
            //TODO stop timer
            // console.log(d);

            if (d === correctIndex) { // compare d to correctIndex if true
                // console.log("YES")
                // alert("Correct!"); // WORKING
                correct++;
                console.log("Correct: " + correct);
            }
            else if (d != correctIndex) { // compare d to correctIndex if false
                    // alert("Sorry that's not the answer"); // WORKING
                    incorrect++;
                    console.log("Incorrect: " + incorrect);
            }
            else {  // d is not true or false
                    alert("You did not make a selection.")
                    unanswered++;
                    console.log(unanswered);
            }

        });

    }); // CLOSE $("#startButton").click(function()


//////////      PSEUDOCODE      //////////

// Trivia game with multple choice answers and count down timer for each round, timer stops when guess is made or time runs out.
// Create varibles; timer, count, unanswered
// The game begins on a Start page. Once start is clicked than the game begins "initializedGame(), resetRount".
// initializedGame() set all varibles timer, win, lose, unanswered
// resetRound will display new questions and possible multple choice answers to click, timer starts counting down from 30 seconds.
// Only one answer is "true". If true or false or if out of time, stop timer. Display if click matches answer display "Correct!" and
// display answer and gif for x seconds, resetRound(), else display "Incorrect. The correct answer was:" display answer and gif for x seconds, resetRound(). 



// EMPTY CONTAINER
// Deleting the buttons prior to adding new buttons
// (this is necessary otherwise we will have repeat buttons)
// $("#buttonContainer").empty();


// LEARNING THIS
// Answers to question 1-4
// $(".answer1").on("click", function() {
//         // $("$this.")??
//     });


///// Progress indicator with count down /////
// Select class of hidden, removeClass 'hidden' to make progress bar and time appear.
        // var showProgress; 
        //     showProgress = $(".hidden").removeClass('hidden');

        // ProgressCountdown(20, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`Time is up!`));

        // function ProgressCountdown(timeleft, bar, text) {
        // return new Promise((resolve, reject) => {
        //     var countdownTimer = setInterval(() => {
        //     timeleft--;

        //     document.getElementById(bar).value = timeleft;
        //     document.getElementById(text).textContent = timeleft;

        //     if (timeleft <= 0 || incorrect) {
        //         clearInterval(countdownTimer);
        //         resolve(true);   
                
        //     }
        //     }, 1000);
        // });
        // }