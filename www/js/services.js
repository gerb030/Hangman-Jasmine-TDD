angular.module('hangman.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GameService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    {
      id : 10,
      opponent : '434636',
      opponentName : 'Jantje',
      hash : '1fc11ae1ff19f787fa6780ebf61fe',
      word : ['_','I','_','_','E','R'],
      guesses : ['D','F','I','E','R'],
      lives : 4,
      points : 2,
      opponentLives : 3,
      opponentPoints : 1,
      yourTurn : true,
      gameState : 'busy'
    },
    {
      id : 11,
      opponent : '434637',
      opponentName : 'Pietje',
      hash : '6f6afcbacb78fc0c7bbcfbfcf8bb',
      word : ['L','_','_','E','R'],
      guesses : ['D','E','R'],
      lives : 4,
      points : 1,
      opponentLives : 4,
      opponentLives : 1,
      yourTurn : false,
      gameState : 'busy'
    }
  ];

  return {
    all: function() {
      return games;
    },
    get: function(gameId) {
      // Simple index lookup
      return games[gameId];
    },
    new: function() {
      var g = Game.new('nl');
      return g;
    }
  }
});

/*

var Game = function() {
  this.word = '';
  this.letters = [];
}

Game.new = function(totalLetters, language) {
  this.word = generateWord(totalLetters, language);
  this.totalLetters = totalLetters;
  this.livesRemaining = 3;
  this.actualLetters = [];
  this.boardLetters = [];
  for(var n=0;n<this.word.length;n++) {
    var thisWord = this.word[n, 1];
    this.actualLetters.push(thisWord);
    this.boardLetters.push(new Letter("_", thisWord, false));
  }
  this.guesses = [new Guess('A', true), new Guess('A', false), new Guess('Q', true)];
  return this;
}

Game.getBoardLetters = function() {
  return this.boardLetters;
}

Game.getGuesses = function() {
  return this.guesses;
}

Game.getLivesRemaining = function() {
  return this.livesRemaining;
}

Game.addGuess = function(guess) {
  for (var i=0;i<word.length;i++) {
    if (guess.letter.toUpperCase() == word.charAt(i).toUpperCase()) {

    }
  }
}
*/


/*
Game.canTakeGuess = function(letter) {
  letter = letter.toUpperCase();
  var res = letter.match(/(^[A-Z]{1}$)/);
  if (res == null) {
    console.log("input nog acceptable")
    return {continue: false, msg: "Kies een letter om te raden."};
  } else {
    for(var g in this.guesses) {
      if (letter == this.guesses[g].letter) {
        console.log('already played '+letter);
        return {continue: false, msg: "De letter "+letter+" is al gespeeld."};
      }
    }
    // TODO: check lives
  }
  return  {continue: true};
}

var Letter = function(displayLetter, letter, guessed) {
  this.displayLetter = displayLetter;
  this.letter = letter;
  this.guessed = guessed;
}

var Guess = function(letter, yours) {
  this.letter = letter;
  this.yours = yours;
  this.class = yours ? "yours" : "theirs";
}


function generateWord(totalLetters, language) {
  var words = {
        3 : ['de', 'ik', 'zo'],
        3 : ['ook', 'nee'],
        4 : ['leuk', 'maar', 'geel'],
        5 : ['groen', 'melig', 'water'],
        6 : ['bakker', 'groente', 'helaas'],
        7 : ['feestje', 'cadeaux', 'meestal'],
        8 : ['zoontjes', 'rommelig'],
        9 : ['vervelend', 'geelzucht']
      }
    return words[totalLetters][Math.floor(Math.random()*words[totalLetters].length)];
}
*/
