document.onkeyup = function(event) {

    var musician = "Modern Talking";
    var numberOfGuesses = 10;

    //Display the same number of '_' as the length of musician string
    var musicianPlaceholder = "_";
    for (var i=0; i<musician.length-1; i++) {
        musicianPlaceholder += " ";
        musicianPlaceholder += "_";
    }
    var currentWord = document.getElementById("current_word"); 
    currentWord.textContent = musicianPlaceholder;

    // Determines which key was pressed.
    var userGuess = event.key;
    alert(userGuess);

    var lettersGuessed = "";

    //Display the letter
    var userGuessIndices = getAllIndices(musician, userGuess[0]);
    alert(userGuessIndices[0]);
    alert(userGuessIndices[1]);
    if (userGuessIndices.length != 0) {

        //First, display the musician placeholder with letters that were just guessed
        musicianPlaceholder = "";
        for (var i=0; i<musician.length; i++) {
             if (userGuessIndices.indexOf(i) != -1) {
                 musicianPlaceholder += musician[i];
             } else {
                musicianPlaceholder += "_";
             }
             musicianPlaceholder += " ";
         }

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