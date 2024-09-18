function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Daniel Georgas"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
   a = 5
   b = "10"
   numbers = a + b
   document.getElementById("add").innerHTML = `${a} + ${b} = ${numbers}`;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    a = 246
    a.toString()
    document.getElementById("to-string").innerHTML = `${a} has been converted to a string.`;

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    a = 10.123456
    document.getElementById("exponent").innerHTML = `This is ${a.toExponential(4)} as an exponent.`;

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    a = 8.642
    document.getElementById("fixed").innerHTML = `${a.toFixed(2)} has been fixed.`;

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    a = 121.212
    document.getElementById("precision").innerHTML = `${a.toPrecision(2)} is using precision.`;

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = `${parseFloat("1 2 3 4")} is using parseFloat.`;

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = `${parseInt("4.32 3.21 2.10 1.00")} is using parseInt.`;


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
   document.getElementById("equals").innerHTML = "A triple equal sign tests whether both sides of the condition are identical. Whereas the double equal sign implicitly converts the data types.";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The and operator takes precedence over or.";    

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    answer = "C"
    switch (answer) {
        case "A":
            document.getElementById("switch").innerHTML = "You have choosen answer A.";
            break;
        case "B":
            document.getElementById("switch").innerHTML = "You have choosen answer B.";
            break;
        case "C":
            document.getElementById("switch").innerHTML = "You have choosen answer C.";
                break;
        case "D":
            document.getElementById("switch").innerHTML = "You have choosen answer D.";
            break;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    course = "JavaScript"
    course === "JavaScript"
    ? document.getElementById("ternary").innerHTML = "You have finished this assignment."
    : document.getElementById("ternary").innerHTML = "You should try out JavaScript.";

}