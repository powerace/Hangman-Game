var game = {
	words: ["monster", "jewels", "pizza", "coding"],
	totalGuesses: 20,
	images: ["monster.png","jewels.png","pizza.png","coding.png"],
	rounds: 0,
	setUpWord: function(){
		var answer = document.querySelector(".answer");

		for(var counter = 0; counter < this.words[this.rounds].length; counter++){
			//console.log(answer);
			var underScore = document.createElement('SPAN');
			underScore.innerHTML = '_ ';
			underScore.className = "letter" + counter;
			answer.appendChild(underScore);

		}

		document.querySelector(".guessRemain").innerHTML = "20";
	},
	checkIfLetterMatches: function(event){

	var letterTyped = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterTyped);

	var letterTypedIndex = this.words[this.rounds].indexOf(letterTyped);

        if (letterTypedIndex !== -1){
          this.letterMatches(letterTypedIndex, letterTyped);
        } else {
        	this.letterDoesNotMatch();
        }
	},
	letterMatches: function(letterTypedIndex, letterTyped){
	console.log(letterTypedIndex);
		document.querySelector(".letter" + letterTypedIndex).innerHTML = letterTyped;
		game.totalGuesses--
	},
	letterDoesNotMatch: function(){},
	showLettersGuessed: function(){}
};


game.setUpWord();

document.onkeyup = function(event){
	
	document.querySelector(".guessRemain").innerHTML = game.totalGuesses;
	game.checkIfLetterMatches(event);
}



