var panel = $("#game");

//Set up click events to start and stop game
$(document).on("click", "#startbtn", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

//Create question/answer objects
var questions = [{
	question: "Who preceded T'Challa as Black Panther?",
	choices: ["Eric Killmonger", "Zuri", "T'Chaka", "Shurinoro"],
	correctAnswer: "T'Chaka"

}, {	

	question: "What relation is Eric Killmonger to T'Challa?",
	choices: ["brother", "cousin", "no relation", "nephew"],
	correctAnswer: "cousin"

}, {

	question: "Where did the power of the Black Panther originate?",
	choices: ["Bast", "Zeus", "Panthera pardus", "the queen mother"],
	correctAnswer: "Bast"

}, {

	question: "What is the name of the elite all-women bodyguard squad commanded by Okoye?",
	choices: ["Amazons", "Valkyrior", "Pantheras", "Dora Milaje"],
	correctAnswer: "Dora Milaje"

}, {

	question: "What tribe does M'Baku lead?",
	choices: ["Border Tribe", "The Jabari", "The Royal Family", "Kimoyo"],
	correctAnswer: "The Jabari"

}];

//Establish initial variables
var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

//Run the timer and alert when time is up
  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("Out of time! Try again!");
  		game.done();

  	}
  },

  //The game flow
  start: function() {
	  //Start timer
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h5><span id="counter-number">60</span> seconds remaining</h5><br>');
  	$("#startbtn").remove();

	//Show questions and answers and add done button
  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h6>' + questions[i].question + '</h6>');
      for (var j = 0; j < questions[i].choices.length; j++){
		panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j] + '<br>');
		}
  		}
  		panel.append("<br><br><button id='done'>DONE</button>");
      
  	},
	//When done is clicked, check the answers and tally them for display
  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

	//Show correct and incorrect answer tally
  	  	$("#subcontainer h5").remove();
  	   panel.html("<h6>Quiz Complete</h6>");
  	   panel.append("<h3>You got " + this.correct + " correct! </h3>");
  	   panel.append("<h3>You got " + this.incorrect + " wrong. </h3>");
  	   panel.append("<h3>You skipped " + (questions.length - (this.incorrect + this.correct)) + " questions. </h3>");
  	  
  	  }

  };