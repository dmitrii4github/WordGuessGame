document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    alert(userGuess);

    var musician = "Modern Talking";

    //Display the same number of '_' as the length of musician string
    var musicianPlaceholder = "_";
    for (var i=0; i<musician.length-1; i++) {
        musicianPlaceholder += " ";
        musicianPlaceholder += "_";
    }
    var currentWord = document.getElementById("current_word"); 
    currentWord.textContent = musicianPlaceholder;

    
}