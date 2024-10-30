let array = [];

function addme() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const object = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone
    };
    array.push(object);

    document.getElementById("json-value").innerHTML = JSON.stringify(array);
}