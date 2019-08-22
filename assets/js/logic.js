
// Waits until the page has loaded all content before running below:
$(document).ready(function() {


///// VARIBLES /////
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var qSelector = 0;

///// ARRAYS /////  // Array to hold questions, choices, answers
var questionsArr = [
    {
        prompt: 'What command do you use to make a new directory with a sub folder?',
        choices: [
            'mkdir -p',
            'mkdir -d',
            'makedir'
        ],
        correctIndex: 0
    }, {
        prompt: 'How do you change directory?',
        choices: [
            'changdir',
            'cd',
            'changedirectory'
        ],
        correctIndex: 1
    }, {
        prompt: 'What command do you use to delete a directory?',
        choices: [
            'remove',
            'rm',
            'delete'
        ],
        correctIndex: 1
    }
];

// * // BONUS create a function random choice array selector q1-q9.
// * // BONUS add catagories 


//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {
    time: 20,

    reset: function () {
        stopwatch.time = 20;
        // DONE: Change the "timer" div to "20."
        $("#timer").text("20");
    },

    start: function () {
        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    stop: function () {
        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },

    count: function () {
        // DONE: decrement time by 1, remember we cant use "this" here.
        stopwatch.time--;
        // DONE: Use the variable we just created to show the converted time in the "timer" div.
        $("#timer").text(stopwatch.time);
        console.log(stopwatch.time)
    }
};

  





    ///// FUNCTIONS /////

    function displayButtons() { // Hides/displays buttons
        var buttons = $("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('visible');
        }
    }


    function renderButtons() { // Create buttons with for loop
        stopwatch.start()
        //TODO Create question "qSelector" to display "++"" each question
        var qArr = questionsArr[qSelector].choices //output renderButtons to buttonContainer div

        // TODO create dynamic array selector at random.
        // selectQuestion()
        ///// TEST FOR RANDOM SELECTION
        // var arr = new Array('a', 'b', 'c', 'd', 'e');
        // document.write("Test " + arr[Math.floor(Math.random() * ((arr.length - 1) - 0 + 1))]);
        // TODO create dynamic array selector at random
        // var qArr = questionsArr[Math.floor(Math.random() * (questionsArr.length - 1))].choices 


        $(".button").empty();
        $("#buttonContainer").empty(); // Clear container before dynamically creating content
    console.log("qArr: " + qArr)

        var buttons = $("button");
        for (var i = 0; i < qArr.length; i++) {
            // Then dynamicaly generating buttons for each item in the array
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            // console.log(qArr[i])
            var a = $("<button>");
            // // Adding a class of movie to our button
            a.addClass("button fadeIn");
            // Adding a data-attribute
            a.attr("data-index", [i]);
            // Providing the initial button text
            a.text(qArr[i]);
            // Adding the button to the HTML
            $("#buttonContainer").append(a);
        }
        $('.button').click(function () {
            var userChoice = $(this).data('index')
            //TODO stop timer
            stopwatch.stop()
            stopwatch.reset()   
            // console.log(d);
        
            if (userChoice === correctIndex) { // compare userChoice to correctIndex if true
                // console.log("YES")
                // alert("Correct!"); // WORKING
                correct++;
                console.log("Correct: " + correct);
                alert("Correct!")          
            }
            else if (userChoice != correctIndex) { // compare userChoice to correctIndex if false
                // alert("Sorry that's not the answer"); // WORKING
                incorrect++;
                console.log("Incorrect: " + incorrect);
                alert("Sorry that's incorrect.")// TODO //
                            }
            else {  // userChoice is not true or false
                alert("You did not make a selection.")
                unanswered++;
                console.log(unanswered);
                alert("Better luck next question.")
                            }
            console.log("qSelector++ & renderButtons")
            qSelector++;
            console.log("qSelector: " + qSelector) 
            renderButtons()
        });
    }

    var correctIndex = questionsArr[qSelector].correctIndex
    console.log("CorrectIndex: " + correctIndex)


// Clicking start; initalize the countDownTimer, hides start button, dynamically create X# of buttons, toggle visable.
$("#startButton").click(function () {

    // On click select #startButton addClass 'invisible' to hide start button

    hideStart = $("#startButton").addClass('invisible');
    // only show after start is pressed
    $("#question_Display").text(questionsArr[qSelector].prompt)
    $("#button0_Display").text(questionsArr[qSelector].answers) // Create for loop to dynamically create buttons and insert text
    displayButtons(); // toggleButtons 
    renderButtons() // May need to be moved
    stopwatch.start(); // start countDown
}); // CLOSE $("#startButton").click(function()


});



//////////      PSEUDOCODE      //////////

// Trivia game with multple choice questions/answers, count down timer for each round, timer stops when button is click or time runs out.
// Create varibles; timer, count, answered, unanswered

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
        //         renderButtons;
        //         qSelector++;
        //     }
        //     }, 1000);
        // });
        // }



// Fade in start button, on click hide start button, loop through each item display questions.

// $this button on click compare to answer, if correct make visible, hide question show img or gif, if incorrect show incorrect


