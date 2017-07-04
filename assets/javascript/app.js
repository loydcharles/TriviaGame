var startDisplay;
var correctAnswerValue = 0;
var number = 100;
var intervalId;
var showImage;

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
    startDisplay = "<h1 class='display_area col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2' style='color: red'>Trivia Game</h1>";
    $(".display").html(startDisplay);     
  }

  function startScreen() {    
    startDisplay = "<h2 class='display_area col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2' style='color: red'>Test your knowledge about Charlotte</h2>";
    $(".display").html(startDisplay);
  }

  function startGame() {         
    startDisplay = "<button id='start'><h2>Start</h2></button>";
    $(".display").html(startDisplay);    
  }

  $("#start").on("click", function() {
      run();
      display();
  //    $(result).html("Questions Answered Correctly: " + correctAnswerValue);    
    });

  setInterval(initialScreen, 1000);
  setInterval(startScreen, 2000);
  startGame();


var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();



  
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

