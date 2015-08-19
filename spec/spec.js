var code = require('../js/class.js');


describe('Game', function() {
  var fallOutNewVegas = null;
  var starOcean = null;

  beforeEach(function(){
    fallOutNewVegas = new code.Game('Fallout New Vegas', 'FPS/RPG');
    starOcean = new code.Game('Star Ocean', 'Classic RPG');
  });

  describe('#constructor', function(){
    it('should set the title', function(){
      expect(fallOutNewVegas.title).toEqual('Fallout New Vegas');
      expect(starOcean.title).toEqual('Star Ocean');
    });

    it('should set the genre', function(){
      expect(fallOutNewVegas.genre).toEqual('FPS/RPG');
      expect(starOcean.genre).toEqual('Classic RPG');
    });
  });
});

describe('GameLibrary', function(){
  var fallOutNewVegas = null;
  var starOcean = null;
  var lib = null;
  var libAlt = null;
  var libWrong = null;

  beforeEach(function(){
    fallOutNewVegas = new code.Game('Fallout New Vegas', 'Adventure/Puzzle');
    starOcean = new code.Game('Star Ocean', 'Classic RPG');
    lib = new code.GameLibrary('My Game Library');
    libAlt = new code.GameLibrary('My New Game Library', [fallOutNewVegas, starOcean]);
    libWrong = new code.GameLibrary('My Dead Game Library', 'string');
  });

  describe('#constructor', function(){
    it('should set the title', function(){
      expect(lib.title).toEqual('My Game Library');
      expect(libAlt.title).toEqual('My New Game Library');
    });

    it('should set games to empty array if not given', function(){
      expect(lib.games).toEqual([]);
    });

    it('should set games if given an array of Games', function(){
      expect(libAlt.games).toEqual([fallOutNewVegas, starOcean]);
    });

    it('should not let you use a primitive as 2nd arg', function(){
      expect(libWrong.games).toEqual([]);
    });
  });
});
