/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
items = ''
array = ["Guardians of the Galaxy", "Mario Kart", "Knight and Day", "Super Smash Bros.", "National Treasure"]
for (item of array) {
    items += `${item}<br>`
}
document.getElementById("list").innerHTML = items

/*
JS Sets: https://www.w3schools.com/js/js_sets.asp
Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
songs = '<u>Set 1</u><br>'
set = new Set(["Kryptonite", "The Good Life", "The Pride", "Breaking The Habit", "Are You Ready?"])
for (song of set) {
    songs += `${song}<br>`
}
document.getElementById("set1").innerHTML = songs

// add two more songs to the set then display in the set2 paragraph
songs = '<u>Set 2</u><br>'
set.add("Bring Me To Life")
set.add("Rx")
for (song of set) {
    songs += `${song}<br>`
}
document.getElementById("set2").innerHTML = songs

/* 
Maps: https://www.w3schools.com/js/js_maps.asp
Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
contacts = '<u>Map 1</u><br>'
map = new Map([
    ["John Doe", "jdoe@gmail.com"],
    ["Jane Smith", "janesmith@gmail.com"],
    ["David Brown", "dbrown@gmail.com"],
    ["Emily White", "ewhite@gmail.com"],
    ["Michael Green", "mgreen@gmail.com"]
])
map.forEach(function(value, key) {
    contacts += `${key}: ${value}<br>`
})
document.getElementById("map1").innerHTML = contacts

// add two new names and emails and display in map2 use the forEach() method
contacts = '<u>Map 2</u><br>'
map.set("Alice Blue", "ablue@gmail.com")
map.set("Chris Black", "cblack@gmail.com")
map.forEach(function(value, key) {
    contacts += `${key}: ${value}<br>`
})
document.getElementById("map2").innerHTML = contacts

// get and display the email of one person, display in map3
contact = '<u>Map 3</u><br>'
person = "Emily White"
contact += `${person}: ${map.get(person)}`
document.getElementById("map3").innerHTML = contact