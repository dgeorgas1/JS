function addDate(){
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
}

function estimate(){
    let name = document.getElementById("name").value;

    var clubs = document.getElementById("clubs").value;
    var subs = document.getElementById("subs").value;
    var paninis = document.getElementById("paninis").value;
    var porks = document.getElementById("porks").value;
    var sandwiches = document.getElementById("sandwiches").value;

    if (clubs != 0) {
        clubCost = clubs * 9
    }
    else {
        clubCost = 0
    }
    if (subs != 0) {
        subCost = subs * 8
    }
    else {
        subCost = 0
    }
    if (paninis != 0) {
        paniniCost = paninis * 9
    }
    else {
        paniniCost = 0
    }
    if (porks != 0) {
        porkCost = porks * 9
    }
    else {
        porkCost = 0
    }
    if (sandwiches != 0) {
        sandwichCost = sandwiches * 7
    }
    else {
        sandwichCost = 0
    }
    sandwichesCost = clubCost + subCost + paniniCost + porkCost + sandwichCost

    var fries = document.getElementById("fries").value;
    var slaws = document.getElementById("slaws").value;
    var pSalads = document.getElementById("pSalads").value;
    var fSalads = document.getElementById("fSalads").value;
    var guacamoles = document.getElementById("guacamoles").value;

    if (fries != 0) {
        friesCost = fries * 3
    }
    else {
        friesCost = 0
    }
    if (slaws != 0) {
        slawCost = slaws * 2.5
    }
    else {
        slawCost = 0
    }
    if (pSalads != 0) {
        pSaladCost = pSalads * 3
    }
    else {
        pSaladCost = 0
    }
    if (fSalads != 0) {
        fSaladCost = fSalads * 3.5
    }
    else {
        fSaladCost = 0
    }
    if (guacamoles != 0) {
        guacamoleCost = guacamoles * 4
    }
    else {
        guacamoleCost = 0
    }
    sidesCost = friesCost + slawCost + pSaladCost + fSaladCost + guacamoleCost

    var teas = document.getElementById("teas").value;
    var coffees = document.getElementById("coffees").value;
    var lemonades = document.getElementById("lemonades").value;
    var palmers = document.getElementById("palmers").value;
    var waters = document.getElementById("waters").value;

    if (teas != 0) {
        teaCost = teas * 2.5
    }
    else {
        teaCost = 0
    }
    if (coffees != 0) {
        coffeeCost = coffees * 3.5
    }
    else {
        coffeeCost = 0
    }
    if (lemonades != 0) {
        lemonadeCost = lemonades * 2.5
    }
    else {
        lemonadeCost = 0
    }
    if (palmers != 0) {
        palmerCost = palmers * 3
    }
    else {
        palmerCost = 0
    }
    if (waters != 0) {
        waterCost = waters * 1.5
    }
    else {
        waterCost = 0
    }
    drinksCost = teaCost + coffeeCost + lemonadeCost + palmerCost + waterCost
    
    totalCost = sandwichesCost + sidesCost + drinksCost
    document.getElementById("estimate").innerHTML = name + ", here is your order:" + 
                                        "<br>" + "Sandwiches: $" + sandwichesCost + 
                                        "<br>" + "Sides: $" + sidesCost + 
                                        "<br>" + "Drinks: $" + drinksCost +
                                        "<br>" + "Total: $" + totalCost;
}