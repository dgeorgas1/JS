function addDate(){
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";

    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";

    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";

    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
}

function estimate(){
    var rooms = document.getElementById("rooms").value;

    let name = document.getElementById("name").value;
    let rm1length = parseFloat(document.getElementById("rm1length").value);
    let rm1width = parseFloat(document.getElementById("rm1width").value);
    let rm1height = parseFloat(document.getElementById("rm1height").value);
    let rm1totalSqFt = ((rm1length  * rm1height * 2) + (rm1length * rm1width * 2));
    let rm1cost = (rm1totalSqFt * .65);
    document.getElementById("rm1cost").value = rm1cost;

    let rm2length = parseFloat(document.getElementById("rm2length").value);
    let rm2width = parseFloat(document.getElementById("rm2width").value);
    let rm2height = parseFloat(document.getElementById("rm2height").value);
    let rm2totalSqFt = ((rm2length  * rm2height * 2) + (rm2length * rm2width * 2));
    let rm2cost = (rm2totalSqFt * .65);
    document.getElementById("rm2cost").value = rm2cost;

    let rm3length = parseFloat(document.getElementById("rm3length").value);
    let rm3width = parseFloat(document.getElementById("rm3width").value);
    let rm3height = parseFloat(document.getElementById("rm3height").value);
    let rm3totalSqFt = ((rm3length  * rm3height * 2) + (rm3length * rm3width * 2));
    let rm3cost = (rm3totalSqFt * .65);
    document.getElementById("rm3cost").value = rm3cost;

    var totalCost = rm1cost;

    if (rooms >= 2){
        totalCost = rm1cost + rm2cost;
    }

    if (rooms == 3){
        totalCost = rm1cost + rm2cost + rm3cost;
    }
    document.getElementById("estimate").innerHTML = (name + ", your estimate is: $" + totalCost)
}

function toggleRooms(){
    var rooms = document.getElementById("rooms").value;

    if (rooms == 1){
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";

        document.getElementById("rm2length").value = "";
        document.getElementById("rm2width").value = "";
        document.getElementById("rm2height").value = "";
        document.getElementById("rm2cost").value = "";
        document.getElementById("rm3length").value = "";
        document.getElementById("rm3width").value = "";
        document.getElementById("rm3height").value = "";
        document.getElementById("rm3cost").value = "";
    }
    
    if(rooms >= 2){
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";

        document.getElementById("rm3length").value = "";
        document.getElementById("rm3width").value = "";
        document.getElementById("rm3height").value = "";
        document.getElementById("rm3cost").value = "";
    }

    if (rooms == 3){
        document.getElementById("room3").style.display = "block";
    }
}