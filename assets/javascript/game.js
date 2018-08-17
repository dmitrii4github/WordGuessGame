var musician = "Mad";
var numberOfGuesses = 10;
var lettersGuessed = "";
var currentWord = null;
var initializePlaceholder = true;
var musicianPlaceholder = "";

document.onkeyup = function(event) {

    currentWord = document.getElementById("current_word"); 

    //Display the same number of '_' as the length of musician string
    if (initializePlaceholder) {
        musicianPlaceholder = "_";
        for (var i=0; i<musician.length-1; i++) {
            musicianPlaceholder += " ";
            musicianPlaceholder += "_";
        }
        currentWord.textContent = musicianPlaceholder;
        initializePlaceholder = false;
    }

    // Determines which key was pressed.
    var userGuess = event.key;
    alert(userGuess);

    //Display the letter
    var userGuessIndices = getAllIndices(musician, userGuess[0]);
    alert(userGuessIndices[0]);
    alert(userGuessIndices[1]);
    if (userGuessIndices.length != 0) {

        //First, display the musician placeholder with letters that were just guessed
        var newMusicianPlaceholder = "";
        alert("starting loop");
        alert(musicianPlaceholder);
        alert(newMusicianPlaceholder);
        for (var i=0; i<musicianPlaceholder.length; i++) {
            if ((userGuessIndices.indexOf(i) != -1) || ((musicianPlaceholder[i] != "_") && (musicianPlaceholder[i] != " "))) {
                newMusicianPlaceholder += musician[i];
            } else if (musicianPlaceholder[i] == "_") {
                newMusicianPlaceholder += "_";
            } else {
                newMusicianPlaceholder += " ";
            }
            alert(newMusicianPlaceholder);
        }

        musicianPlaceholder = newMusicianPlaceholder;

         //Second, display what letters have been guessed
         lettersGuessed += musician[userGuessIndices[0]];
         lettersGuessed += " ";
    }    
    alert(musicianPlaceholder);
    currentWord.textContent = musicianPlaceholder;

    numberOfGuesses--;

    var guessNumber = document.getElementById("guess_number"); 
    guessNumber.textContent = numberOfGuesses;

    var lettersGuessedDiv = document.getElementById("letters_guessed");
    lettersGuessedDiv.textContent = lettersGuessed;

}

function getAllIndices(arr, val) {
    var indices = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indices.push(i);
    }
    return indices;
}