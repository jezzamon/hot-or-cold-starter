var guessIndex=0;
var secretNum;


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function() {
  		newGame();
  	});

	$("form").submit(function(e){
    	var addGuess = $("input[name=userGuess]").val();
    	clearInput();
    	if (addGuess <= 100 && addGuess > 0) {
    		feedback(checkGuess(addGuess));
    		$("#count").text(guessIndex);
    		$("#guessList").append("<li>"+addGuess+"</li>");
    		e.preventDefault();	
    	} else {
    		feedback("Please enter a number between 1 and 100");
    	}
    });

	newGame();
});

function clearInput() {
	$("#userGuess:text").val("");
}

function clearList() {
	$("#guessList").empty();
	$("#count").text("0");
}

function newGame() {
	secretNum = randomNum();
	clearInput();
	clearList();
}

function randomNum() {
	return Math.floor((Math.random() * 100)+1)
}

function checkGuess(addGuess){
	guessIndex++;
	var diff = Math.abs(addGuess - secretNum);
	var message;
	if (diff === 0) {
		return win();
	} else if (diff < 50) {
		return hot(diff);
	} else {
		return cold();
	}
}

function win() {
	return "You guessed it right!"
}

function feedback(message) {
	$("#feedback").text(message);		
}

function hot(diff) {
	if (diff < 10) {
		return "you are on fire!"
	} else if (diff < 20) {
		return "you are very hot!";
	}	else if (diff < 30) {
		return "you are hot";
	} else if (diff < 40) {
		return "you are warm";
	} else {
		return "meh, lukewarm";
	}
}

function cold(diff) {
	if (diff < 60) {
		return "you are almost lukewarm :)";
	} else if (diff < 70) {
		return "you are still cold";
	} else if (diff < 80) {
		return "you are cold";
	} else if (diff < 90) {
		return "you are tres cold";
	} else {
		return "Whoah iceberg cold";
		}
}
