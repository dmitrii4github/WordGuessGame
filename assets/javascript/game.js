document.onkeyup = function(event) {

    var musician = "Modern Talking";

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

    //Display the letter
    userGuessIndex = musician.indexOf(userGuess[0]);
    alert(userGuessIndex);
    if (userGuessIndex != -1) {
        musicianPlaceholder = "";
        for (var i=0; i<musician.length; i++) {
            if (i == userGuessIndex) {
                musicianPlaceholder += musician[i];
            } else {
               musicianPlaceholder += "_";
            }
            musicianPlaceholder += " ";
        }
    }    
    alert(musicianPlaceholder);
    currentWord.textContent = musicianPlaceholder;
    
}