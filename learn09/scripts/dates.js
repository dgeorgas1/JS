/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
basic = new Date()
document.getElementById("basic").innerHTML = basic

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
today = new Date(2024, 8, 23)
document.getElementById("today").innerHTML = today

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
birthday = new Date("1996-05-30")
document.getElementById("birthday").innerHTML = birthday

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
iso = basic.toISOString()
document.getElementById("iso").innerHTML = iso

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
date1 = new Date("2024-10")
document.getElementById("date1").innerHTML = date1
date2 = new Date("2024/9/23")
document.getElementById("date2").innerHTML = date2
date3 = new Date("Sep 23, 2024")
document.getElementById("date3").innerHTML = date3

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
get1 = new Date().getFullYear()
document.getElementById("get1").innerHTML = get1
get2 = new Date().getTime()
document.getElementById("get2").innerHTML = get2
get3 = new Date().getDay()
document.getElementById("get3").innerHTML = get3
get4 = new Date().getMilliseconds()
document.getElementById("get4").innerHTML = get4

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
set1 = new Date()
set1.setHours(16)
document.getElementById("set1").innerHTML = set1
set2 = new Date()
set2.setDate(25)
document.getElementById("set2").innerHTML = set2
set3 = new Date()
set3.setSeconds(31)
document.getElementById("set3").innerHTML = set3
set4 = new Date()
set4.setMonth(4)
document.getElementById("set4").innerHTML = set4