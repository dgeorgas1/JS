function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    round = Math.round(5.29)
    document.getElementById("round").innerHTML = round
    ceil = Math.ceil(3.33)
    document.getElementById("ceil").innerHTML = ceil
    floor = Math.floor(6.66)
    document.getElementById("floor").innerHTML = floor
    trunc = Math.trunc(12.34)
    document.getElementById("trunc").innerHTML = trunc
    sign = Math.sign(-246)
    document.getElementById("sign").innerHTML = sign
    pow = Math.pow(5, 3)
    document.getElementById("pow").innerHTML = pow
    min = Math.min(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    document.getElementById("min").innerHTML = min
    random = Math.random()
    document.getElementById("random").innerHTML = random

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    random2 = Math.floor(Math.random() * 100) + 1
    document.getElementById("random2").innerHTML = random2

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    value = 10
    valueType = typeof value
    compareVal = "10"
    compareValType = typeof compareVal
    equal = value == compareVal
    equalValueType = value === compareVal
    comparisons = `${value} (${valueType}) == "${compareVal}" (${compareValType}) is ${equal}<br>
                   ${value} (${valueType}) === "${compareVal}" (${compareValType}) is ${equalValueType}`
    document.getElementById("comparisons").innerHTML = comparisons

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}