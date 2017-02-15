var game = {
	words: ["monster", "jewels", "pizza", "coding"],
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
	var currentWord = this.words[this.rounds];

	var letterTypedIndexes = function (currentWord, letterTyped) {
	    var indexes = [], i;
	    for(i = 0; i < arr.length; i++)
	        if (currentWord[i] === val)
	            indexes.push(i);
	    return indexes;
	}

	console.log(indexes);

	var letterNode = document.createTextNode(letterTyped);

		for (var i = letterTypedIndexes.length - 1; i >= 0; i--) {
			console.log(letterTypedIndexes[i]);
			
			if (letterTypedIndexes[i]!== -1){
          		document.querySelector(".letter" + letterTypedIndexes[i]).innerHTML = letterTyped;
        	} 
		}

        

        document.querySelector(".lettersGuessed").appendChild(letterNode);
		this.totalGuesses--
	},
	// letterMatches: function(letterTypedIndex, letterTyped){
	// console.log(letterTypedIndex);
	// 	document.querySelector(".letter" + letterTypedIndex).innerHTML = letterTyped;
	// },
	win: function(){
		if (document.querySelector(".answer").textContent.indexOf('_') === -1) {
			this.wins = this.wins + 1;
			console.log(this.wins);
			document.querySelector(".winNum").innerHTML = this.wins;
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





