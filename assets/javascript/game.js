var words = ["pirate", "rum", "treasure", "ship", "cutlass", "matey", "doubloon", "sails", "grog", "wench", "scurvy", "crowsnest", "plank", "gold", "kraken", "booty", "barnacle", "landlubber", "ahoy", "buccaneer", "scalywag", "scuttle", "seadog"]
var currentWord = [];
var placehold = [];
var lettersGuessed = [];
var remaining = 10;
var wins = 0;
var correct = [];


//document startup start command
function load() {
  currentWord = words[Math.floor(Math.random() * words.length)]
  document.getElementById("game").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("secondary").style.display = "none";
  document.getElementById("win").style.display = "none";
  document.getElementById("lose").style.display = "none";

  document.onkeyup = function (e) {
    if (e.which == 32) {
      game();
      //display defauts and current word on start game/reset

      placehold = [];
      lettersGuessed = [];
      document.getElementById("guessed").innerHTML = lettersGuessed;
      yourGuess = [];
      document.getElementById("guess").innerHTML = yourGuess;
      remaining = 10;
      yourGuess = 0;
      document.getElementById("main").style.display = "block";
      document.getElementById("secondary").style.display = "block";
      document.getElementById("game").style.display = "none";
      document.getElementById("current").innerHTML = currentWord;
      for (var i = 0; i < currentWord.length; i++) {
        placehold.push("_");
      }

      document.getElementById("current").innerHTML = placehold;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("remaining").innerHTML = remaining;
      console.log(currentWord);
      console.log(remaining);

    }
  }
};


function game() {

  //user input function for letters only
  document.onkeyup = function (event) {
    var yourGuess = event.key.toLowerCase();
    if (event.which <= 90 && event.which >= 65) {

      //display letter user just guessed
      document.getElementById("guess").innerHTML = yourGuess;

      //display guessed letters array
      lettersGuessed.push(yourGuess);
      document.getElementById("guessed").innerHTML = lettersGuessed;

    }
    //right or wrong guess function
    if (currentWord.indexOf(yourGuess) < 0) {
      //wrong guess
      remaining--;
      document.getElementById("remaining").innerHTML = remaining;
    } else {
      //right guess
      for (var i = 0; i < currentWord.length; i++) {

        if (currentWord[i] == yourGuess) {
          placehold[i] = yourGuess;
          document.getElementById("current").innerHTML = placehold;
        }
      }
    }

    //win or lose?

    //lose
    if (remaining == 0) {
      document.getElementById("lose").style.display = "block";
      document.getElementById("current").innerHTML = currentWord
      gameOver();
      //win
    } else if (placehold.indexOf('_') === -1) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("win").style.display = "block";
      gameOver();

    }

    //reset after win/loss
    function gameOver() {

      document.onkeyup = function (e) {
        if (e.which == 32) {

          currentWord = [];
          document.getElementById("current").innerHTML = currentWord
          load();

        }
      }
    }
  };
};