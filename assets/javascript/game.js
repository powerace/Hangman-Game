var game = {
	words: ["monster", "krystal", "pizza", "coding"],
	totalGuesses: 15,
	images: ["monster.png","jewels.png","pizza.png","coding.png"],
	rounds: 0,
	wins: 0,
	setUpGame: function(){
		var answer = document.querySelector(".answer");
		answer.innerHTML = "";
		this.totalGuesses = 15;
		document.querySelector(".lettersGuessed").innerHTML = "";

		for(var counter = 0; counter < this.words[this.rounds].length; counter++){
			//console.log(answer);
			var underScore = document.createElement('SPAN');
			underScore.innerHTML = '_ ';
			underScore.className = "letter" + counter;
			answer.appendChild(underScore);
		}

		document.querySelector(".guessRemain").innerHTML = this.totalGuesses;
	},
	checkIfLetterMatches: function(event){

	var letterTyped = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterTyped);

	var letterTypedIndex = this.words[this.rounds].indexOf(letterTyped);

	var letterNode = document.createTextNode(letterTyped);

        if (letterTypedIndex !== -1){
          this.letterMatches(letterTypedIndex, letterTyped);
        } 

        document.querySelector(".lettersGuessed").appendChild(letterNode);
		this.totalGuesses--
	},
	letterMatches: function(letterTypedIndex, letterTyped){
	console.log(letterTypedIndex);
		document.querySelector(".letter" + letterTypedIndex).innerHTML = letterTyped;
	},
	win: function(){
		if (document.querySelector(".answer").textContent.indexOf('_') === -1) {
			this.wins = this.wins + 1;
			console.log(this.wins);
			document.querySelector(".winNum").innerHTML = this.wins;
			document.querySelector(".feature").src = "assets/images/" + this.images[this.rounds]; 
			document.querySelector(".title").innerHTML = this.words[this.rounds];

			this.rounds++
			console.log(this.rounds);

			this.setUpGame();
		}
	},
	lose: function(){
		if ((document.querySelector(".answer").textContent.indexOf('_') !== -1) && (document.querySelector(".guessRemain").textContent === "0")) {
			console.log('lose');
			this.rounds++
			this.setUpGame();
		}
	}
};


for (var i = game.words.length - 1; i >= 0; i--) {

	game.setUpGame();

	document.onkeyup = function(event){
		
		game.checkIfLetterMatches(event);
		document.querySelector(".guessRemain").innerHTML = game.totalGuesses;
		game.lose();
		game.win();
	}
}







