const car1 = {
    heading: "Porsche 911 GT3 RS",
    image: "images/porsche.webp",
    performance: "Performance: 0-60 mph in approximately 3.0 seconds",
    horsepower: "Horsepower: 520",
    altTag: "Porsche"
};
const car2 = {
    heading: "Ferrari 488 Pista",
    image: "images/ferrari.webp",
    performance: "Performance: 0-60 mph in about 2.8 seconds",
    horsepower: "Horsepower: 710",
    altTag: "Ferrari"
};
const car3 = {
    heading: "Lamborghini Huracán EVO",
    image: "images/lamborghini.webp",
    performance: "Performance: 0-60 mph in about 2.9 seconds",
    horsepower: "Horsepower: 631",
    altTag: "Lamborghini"
};
const car4 = {
    heading: "McLaren 720S",
    image: "images/mcLaren.webp",
    performance: "Performance: 0-60 mph in about 2.7 seconds",
    horsepower: "Horsepower: 710",
    altTag: "McLaren"
};
const car5 = {
    heading: "Chevrolet Corvette Z06",
    image: "images/corvette.webp",
    performance: "Performance: 0-60 mph in approximately 2.6 seconds",
    horsepower: "Horsepower: 670",
    altTag: "Corvette"
};

function start(){
    document.getElementById("heading1").innerHTML = car1.heading;
    document.getElementById("image1").src = car1.image;
    document.getElementById("p1").innerHTML = `${car1.performance}<br>${car1.horsepower}`;
    document.getElementById("image1").setAttribute('alt', car1.altTag);

    document.getElementById("heading2").innerHTML = car2.heading;
    document.getElementById("image2").src = car2.image;
    document.getElementById("p2").innerHTML = `${car2.performance}<br>${car2.horsepower}`;
    document.getElementById("image2").setAttribute('alt', car2.altTag);

    document.getElementById("heading3").innerHTML = car3.heading;
    document.getElementById("image3").src = car3.image;
    document.getElementById("p3").innerHTML = `${car3.performance}<br>${car3.horsepower}`;
    document.getElementById("image3").setAttribute('alt', car3.altTag);

    document.getElementById("heading4").innerHTML = car4.heading;
    document.getElementById("image4").src = car4.image;
    document.getElementById("p4").innerHTML = `${car4.performance}<br>${car4.horsepower}`;
    document.getElementById("image4").setAttribute('alt', car4.altTag);

    document.getElementById("heading5").innerHTML = car5.heading;
    document.getElementById("image5").src = car5.image;
    document.getElementById("p5").innerHTML = `${car5.performance}<br>${car5.horsepower}`;
    document.getElementById("image5").setAttribute('alt', car5.altTag);
}