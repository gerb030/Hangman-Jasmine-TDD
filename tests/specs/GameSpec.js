describe('Game', function() {
  describe('Create new game object', function() {
    var game;
    beforeEach(function() {
      game = Game.new(6, 'nl');
      spyOn(game, '_generateWord').and.callThrough();
    });
    
    it('should call generateword', function() {
        game.init();
        expect(game._generateWord).toHaveBeenCalled(); 
    })
    it('game should contain a new game', function() {
        expect(game instanceof Game);
    })


  })
  describe('test word list coordination', function() {
    var game;
    beforeEach(function() {
      game = Game.new(3, 'nl', 3);
      spyOn(game, '_generateWord').and.returnValue('oef');
    });
    it('should generate one word', function() {
      game.init();
      expect(game.word).toEqual('oef');
    })
  })
  describe('test select a random word', function() {
    beforeEach(function() {
      game = Game.new(6, 'nl', 3);
      game.init();
      spyOn(game, '_loadWords').and.returnValue(['jammerdebammer']);
    });
      it('_generateWord should return one word', function() {
      game = Game.new(6, 'nl', 3);
      expect(game._generateWord(14, 'nl')).toEqual('jammerdebammer')
      expect(typeof game._generateWord(14, 'nl')).toEqual('string')
      expect(game._generateWord(14, 'nl').length).toEqual(14)
    })
  })
  describe('test loading words', function() {
    var game;
    beforeEach(function() {
      game = Game.new(5, 'nl', 3);
      spyOn(game, '_loadWords').and.returnValue(['hoera']);
    });
    it('should load word lists', function() {
      words = Game._loadWords();
      expect(words).toEqual(['hoera'])
    })
    it('should create an array of letters', function() {
      game.init();
      expect(game.actualLetters).toEqual(['h','o','e','r','a']);
    })
  })
  describe('guess a letter', function() {
    var game;
    beforeEach(function() {
      game = Game.new(6, 'nl', 3);
      spyOn(game, '_loadWords').and.returnValue(['lekker']);
      game.init();
    });
    it('a letter can added to the guessed letters', function() {
      game.guessLetter('k');      
      expect(game.word).toEqual("lekker");
    })
    it('a letter cannot be guessed twice', function() {
      game.guessLetter('k');      
      expect(function () { game.guessLetter('k') } ).toThrow("Already guessed this letter");
    })
    it('a letter once guessed, stays guessed', function() {
      var result = game.guessLetter('k');      
      expect(game.guessedLetters).toEqual(['k']);
      expect(result).toEqual(true);
    })
    it('a letter that is not in the word is penalised', function() {
      var result = game.guessLetter('q');      
      expect(game.guessedLetters).toEqual(['q']);
      expect(result).toEqual(false);
      expect(game.livesRemaining).toEqual(2);
    })
    it('a letter once guessed, stays guessed', function() {
      game.guessLetter('k');      
      expect(game.getWord()).toEqual(['_', '_', 'k', 'k', '_', '_']);
    })
    it('additional letters stay guessed as well', function() {
      game.guessLetter('k');      
      game.guessLetter('e');      
      expect(game.getWord()).toEqual(['_', 'e', 'k', 'k', 'e', '_']);
    })
  })
});
