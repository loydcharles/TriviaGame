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

var showQuestion;
var count = 0;
var wins = 0;
var loses = 0;

$("#start").click(startQuestion);

$("#stop").click(stopQuestion);

function displayQuestion() {
  $("#question-holder").html(myQuestions[count].question);

  var answer_holder = $("#answer-holder");
  answer_holder.html('');

  $.each(myQuestions[count].answers, function( idx, answer ) {
      answer_holder.append('<label><input type="radio" name="usernames" value="' + idx + '" /> ' + answer + '</label><br>');
  });

  var correctAnswr = myQuestions[count].correctAnswer;

  $('#answer-holder').on('change', 'input', function() {
    var answerSelected = $(this);  
    if(answerSelected.val() === correctAnswr) {
        wins++;
    } 
    else {
      loses++;
    }
  });

  $("#results").html("Wins: " + wins + "     Loses:" + loses);
}

function nextQuestion() {
  
  setTimeout(displayQuestion, 2500);

  if(count == myQuestions.length) {
    stopQuestion();
  }
  count++;
}

function startQuestion() {
  showQuestion = setInterval(nextQuestion, 10000);
}

function stopQuestion() {
  clearInterval(showQuestion);
  $("#answer-holder").val("");
  $("#question-holder").val("");
}