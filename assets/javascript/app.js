var startScreen;
var correctAnswerValue = 0;
var number = 100;
var intervalId;

var myQuestions  = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];

$(document).ready(function() {
// Create a function that creates the start button and initial screen

  function initialScreen() {
    startScreen = "<h1 class='display_area col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2' style='color: red'>Charlotte - Trivia Game</h1>";
    $(".display_area").html(startScreen);
    setInterval(thirtySeconds, 1000);
    $(".display_area").html("Lets start the game");
  }

  initialScreen();
});


$("#start").on("click", function() {
    run();
    display();
//    $(result).html("Questions Answered Correctly: " + correctAnswerValue);    
  });

function display() {    
  $.each(myQuestions, function(key, val) {    
    console.log(val.question);
    console.log(val.answers);
    console.log(val.correctAnswer);

    $('#question').empty();
    
    $('#question').append(val.question);
      var result = $('#answers');
      result.html('');    
    });

    $.each(val.answers, function( idx, answer ) {
      result.append('<label><input type="radio" name="usernames" value="' + idx + '" /> ' + answer + '</label><br>');
    });

    $('#answers').on('change', 'input', function() {
      var answerSelected = $(this);
      
      alert("value.correctAnswer: " + val.correctAnswer);  
      alert("answerValue: " + answerSelected.val());  

      if(val.correctAnswer === answerSelected.val()) {
        correctAnswerValue++;
        alert("Correct Answer Increment: " + correctAnswerValue);
      }
      else {
        alert("Wrong Value"); 
      }      
      $(result).html("Questions Answered Correctly: " + correctAnswerValue);
    }); 
}


function showSuggestions() {
  var usernames = [
    'test1', 'test2', 'test3', 'test4'
  ];
  
  var result = $('#result');
  result.html('');

  for (var i = 0; i < usernames.length; i++) {
    result.append('<label><input type="radio" name="usernames" value="' + usernames[i] + '" /> ' + usernames[i] + '</label>');
  } 
}
                      
$('#test').click(showSuggestions);

$('#result').on('change', 'input', function() {
  var elem = $(this);  
  if (elem.is(':checked')) {
    $('#search').val(elem.val());
    alert(elem.val());    
  }  
});

function run() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#time-left").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}