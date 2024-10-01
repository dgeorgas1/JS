// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
lyrics = '';
for (count = 99; count > 0; count--) {
    lyrics += `${count} bottles of beer on the wall. ${count} bottles of beer. Take one and pass it around. ${count} bottles of beer on the wall.<br>`
}
document.getElementById("beer").innerHTML = lyrics

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
months = '';
array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (month in array) {
    months += `${array[month]}<br>`
}
document.getElementById("for-in").innerHTML = months

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
string = "JavaScript";
characters = '';
for (character of string) {
    characters += `${character}<br>`
}
document.getElementById("for-of").innerHTML = characters

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
numbers = '';
number = 1
while (number < 51) {
    numbers += `${number}<br>`
    number++
}
document.getElementById("while").innerHTML = numbers