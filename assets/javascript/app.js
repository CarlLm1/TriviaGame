// JS //
$(document).ready(function () {

    // Variables
    var number = 60;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    // Timer function
    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    // Decrement timer function
    function decrement() {
        number--;
        $('#timer').html(" " + number + " " + "seconds");
        if (number === 1) {
            $('#timer').html(" " + number + " " + "second");
        }
        else if (number === 0) {
            stop();
            hide();
            displaySummary();
        }
    }

    //Clear timer function
    function stop() {
        clearInterval(intervalId);
    }

    //Hide text function
    function hide() {
        $('#countdown').hide();
        $('.trivia').hide();
        $('#done').hide();
    }

    // Display summary function
    function displaySummary() {
        $('.results').show();
        unanswered = (8 - (correctCount + wrongCount));
        $('#correctScore').text("Correct Answers:" + " " + correctCount);
        $('#wrongScore').text("Wrong Answers:" + " " + wrongCount);
        $('#unanswered').text("Unanswered:" + " " + unanswered);
    }


    //Start Button click
    $('#start').on('click', function () {
        $('#start').hide();
        countdownTimer();
    });

    //Done Button click
    $('#done').on('click', function () {
        $('#start').hide();
        hide();
        displaySummary();
    });

    //Radio button
    $('input[type=radio]').on('change', function () {
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (8 - (correctCount + wrongCount));
    });
});