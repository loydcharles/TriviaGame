var startDisplay;
var correctAnswerValue = 0;
var number = 100;
var intervalId;
var showImage;
var startQuestion;
var nextQuestion;
var timeFlag = true;

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

$("#start").click(startSlideshow);


function nextImage() {
  $.each(myQuestions, function(key, val) {   
    setTimeout(display1(val.question, val.result,  val.correctAnswer), 1000);
  });
}

function startSlideshow() {
  // TODO: Use showImage to hold the setInterval to run nextImage.  
  showImage = setInterval(nextImage, 3000);
}

function stopSlideshow() {
  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

function display1(ques, soln, crctAnswr) {
    var result;    

    $.each(soln, function(idx, answer) {
      result.append('<label><input type="radio" name="usernames" value="' + idx + '" /> ' + answer + '</label><br>');
    });
    alert("Inside nextImage");
    $('#image-holder').append(ques + '<br>' + soln);    

    $('#image-holder').on('change', 'input', function() {
    var answerSelected = $(this);

    if(crctAnswr === answerSelected.val()) {
      correctAnswerValue++;
      alert("Correct Answer Increment: " + correctAnswerValue);
    }
    else {
      alert("Wrong Value"); 
    }
    });
}

function display() {    
  $.each(myQuestions, function(key, val) {    
    console.log(val.question);
    console.log(val.answers);
    console.log(val.correctAnswer);

    $('#image-holder').empty();
    
    $('#image-holder').html(val.question);
      var result = $('#image-holder');
      result.html('');        

    $.each(val.answers, function(idx, answer) {
      result.append('<label><input type="radio" name="usernames" value="' + idx + '" /> ' + answer + '</label><br>');
    });

    $('#answers').on('change', 'input', function() {
      var answerSelected = $(this);

      alert("value.correctAnswer: " + val.correctAnswer);
      alert("answerValue: " + answerSelected.val());

      if(val.correctAnswer === answerSelected.val()) {
        correctAnswerValue++;
        alert("Correct Answer Increment: " + correctAnswerValue);
        timeFlag = false;
      }
      else {
        alert("Wrong Value"); 
      }
      $(result).html("Questions Answered Correctly: " + correctAnswerValue);
      setInterval("", 1000);
    });
  });
}

/*
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

*/