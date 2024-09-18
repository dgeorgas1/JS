// declare and initialize array
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "SWIFT", "KOTLIN", "CSHARP", "ASSEMBLY", "BASIC", "LUA"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessedLetters = []
let incorrectLetters = 1;
// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    found = false;

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }
    if (found == false) {
        attemptsLeft--;
        if (incorrectLetters < 7) {
            incorrectLetters++;
        }
        document.getElementById("hangman").src = `images/0${incorrectLetters}.png`
        guessedLetters.push(userLetter);
        document.getElementById("guessed").innerHTML = `Guessed Letters: ${guessedLetters}`;
    }
    
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    document.getElementById("word").innerHTML = output;
    output = '';

});


//scirpt connected fine somereason the button and the script are not registering.