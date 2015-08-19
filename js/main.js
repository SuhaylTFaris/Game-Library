
$(document).on('ready', function() {

  // Object to hold instances of GameLibrary.
  var libraries = {};
  var currentLib;

  // Start by hiding add game form.
  $('#game-form').hide();

  // Handler for add library form.
  $('#lib-add-form').on('submit', function(event){
    event.preventDefault();

    // Grab name.
    var libName = $('#lib-name').val();

    // Create new GameLibrary.
    var newLib = new GameLibrary(libName);

    libraries[newLib.title] = newLib;
    $('#lib-choice').append($('<option>').html(libName));

    $(this).toggle();
    $('#game-form').toggle();

    // Clear libraries, then opt to render again.
    $('.game-library').remove();
    for (var lib in libraries) {
      console.log(lib);
      $('.container').append(libraries[lib].render());
    }
  });


  // Handler for game form submission.
  $('#game-form').on('submit', function(event){
    event.preventDefault();

    // Grab values.
    var gameName = $('#game-name').val();
    var gameGenre = $('#game-genre').val();
    var libName = $('#lib-choice').val();

    // Create new Game object.
    var newGame = new Game(gameName, gameGenre);

    // If it is not in the library, add it.
    if (!libraries[libName].contains(newGame)) {
      libraries[libName].addGame(newGame);
      $('#' + libraries[libName].id).remove();
    }
    else
      alert('That game is already in the library!');

    // Render games again.
    $('.container').append(libraries[libName].render());
  });

  // Handler for delete buttons on each game.
  $('.container').on('click', 'button.game-delete', function(event){
    event.stopPropagation();

    // Library title to delete form.
    console.log($(this).parent().data());
    var libName = $(this).parent().parent().data('title');
    console.log(libName);

    libraries[libName].removeGame($(this).parent().data());
    console.log(libraries[libName]);
    $('#' + libraries[libName].id).remove();
    $('.container').append(libraries[libName].render());
  });

  // Handler for add library button.
  $('#lib-add-btn').on('click', function(event){

    // Hide game form, show lib form.
    $('#game-form').toggle();
    $('#lib-add-form').toggle();

  });
});
