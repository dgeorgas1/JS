function generateNum() {
    num = Math.floor(Math.random() * 1000) + 1
    alert(`The random number is ${num}`);
}

let prevGuess = null;

function checkGuess() {
    let number = parseInt(document.getElementById("number").value);
    let difference = Math.abs(num - number);

    if (number === num) {
        alert("You guessed the right number!");
        prevGuess = null;
        return;
    }

    let feedback;
    
    if (difference >= 100) {
        feedback = "This guess is freezing."; //100+
    } else if (difference >= 50) {
        feedback = "This guess is cold."; //50-99
    } else if (difference >= 20) {
        feedback = "This guess is warm."; //20-49
    } else {
        feedback = "This guess is hot."; //1-19
    }

    if (prevGuess !== null) {
        let prevDifference = Math.abs(num - prevGuess);

        if (difference < prevDifference) {
            feedback += " You're getting warmer!";
        } else if (difference > prevDifference) {
            feedback += " You're getting colder!";
        } else {
            feedback += " You're at the same distance.";
        }
    }

    alert(feedback);
    prevGuess = number;
}