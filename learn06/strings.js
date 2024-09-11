function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Daniel Georgas";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    let length = myString.length
    document.getElementById("length").innerHTML = length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape = "It\'s alright to ask for help. To escape \"\\\" you would use 2 backslashes."
    document.getElementById("escape").innerHTML = escape;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Daniel Alexander Georgas"
    let fName = name.slice(0, 6)
    document.getElementById("first").innerHTML = fName;


    // Use the Javascript substring Method to display your middle name to the middle paragraph
    mName = name.substring(7, 16)
    document.getElementById("middle").innerHTML = mName;


    // Use the JavaScript subst Method to display your last name to the last paragraph
    lName = name.substr(17, 7)
    document.getElementById("last").innerHTML = lName;



    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newString = major.replace("Physical Therapy", "Mobile Design and Development")
    document.getElementById("major").innerHTML = newString;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    myText = myText.toUpperCase()
    document.getElementById("upper").innerHTML = myText;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    trimText = trimText.trim()
    document.getElementById("trim").innerHTML = trimText;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    may = months.indexOf("May")
    document.getElementById("index").innerHTML = may;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = `Daniel`
    let last = `Georgas`


    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let greeting = `Welcome ${first} ${last}!`
    document.getElementById("greeting").innerHTML = greeting;
}