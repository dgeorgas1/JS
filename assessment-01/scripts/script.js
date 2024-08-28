function image1(){
    document.getElementById("image").src = "images/image1.png"
    document.getElementById("text").innerHTML = "Chicago Bears"
    document.getElementById("text").style.color = "orange"
}

function image2(){
    document.getElementById("image").src = "images/image2.png"
    document.getElementById("text").innerHTML = "Green Bay Packers"
    document.getElementById("text").style.color = "green"
}

function image3(){
    document.getElementById("image").src = "images/image3.png"
    document.getElementById("text").innerHTML = "Detroit Lions"
    document.getElementById("text").style.color = "blue"
}

function addTextFromExternalScript(){
    document.getElementById("text").innerHTML = "Adding text from an external script."
    document.getElementById("text").style.color = "black"
}

function imageWidth(){
    document.getElementById("text")
            .innerHTML = "Changing the image size to W: 300px, H: 200px."
    document.getElementById("text").style.color = "black"
    document.getElementById("image").style="width:300px;height:200px;"
}

function textColor(){
    document.getElementById("text").innerHTML = "Changing the font color to red."
    document.getElementById("text").style.color = "red"
}

function showImage(){
    document.getElementById("text").innerHTML = "Showing image"
    document.getElementById("text").style.color = "black"
    document.getElementById("image").style.display = "block"
}

function hideImage(){
    document.getElementById("text").innerHTML = "Hiding image"
    document.getElementById("text").style.color = "black"
    document.getElementById("image").style.display = "none"
}