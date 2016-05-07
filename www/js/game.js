Array.prototype.contains = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
}

var Game = function() {
  this.word;
}

Game._generateWord = function(totalLetters, langCode) {
	var words = this._loadWords(langCode, totalLetters);
	return this._selectRandomWord(words, Math.random);
}

Game._getWords = function() {
	return {
		'nl' : ['verdween', 'honger'],
		'en' : ['disappear', 'hungry'],
	}
}

Game._loadWords = function(langCode, length) {
	var wordlist = this._getWords();
	if (wordlist[langCode]) {
		var list = [];
		for (var l=0;l<wordlist[langCode].length;l++) {
			if (wordlist[langCode][l].length == length) {
				list.push(wordlist[langCode][l]);
			}
		}
//		console.log(length+" ("+wordlist[langCode]+") > "+list);
		return list;
	}
	return [];
}

Game._selectRandomWord = function(words, algorithm) {
	if (typeof words != 'object') {
		throw "Wrong type supplied";
	}
	var randValue = Math.floor(algorithm() * words.length);
	return words[randValue]; //TODO
}

Game.new = function(length, langCode, lives) {
  this.totalLetters = length;
  this.livesRemaining = lives;
  this.langCode = langCode;
  return this;
}

Game.init = function() {
  this.word = this._generateWord(this.totalLetters, this.langCode);
//  this.word = this.word.toLowerCase();
  this.guessedLetters = [];
  this.actualLetters = [];
  for(var n=0;n<this.word.length;n++) {
    var letter = this.word.substring(n, n+1);
    this.actualLetters.push(letter);
  }
}

Game.guessLetter = function(letter) {
  letter = letter.toLowerCase();
  if (this.guessedLetters.contains(letter)) {
  	throw "Already guessed this letter";
  }
  this.guessedLetters.push(letter);
  if (!this.actualLetters.contains(letter)) {
  	this.livesRemaining--;
  	return false;
  }
  return true;
}

Game.getWord = function() {
  var guessableWord = [];	
  for(var p = 0;p<this.actualLetters.length;p++) {
  	if (this.guessedLetters.contains(this.actualLetters[p])) {
  		guessableWord.push(this.actualLetters[p]);
  	} else {
  		guessableWord.push("_");
  	}
  }  
  return guessableWord;
}
