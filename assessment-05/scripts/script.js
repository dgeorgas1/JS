function getHolidays() {
    months = '';
array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (month of array) {
    months += `<strong>${month}:</strong><br>`;
    switch (month) {
        case "January":
            months += "New Year's Day<br>Martin Luther King Jr. Day<br><br>";
            break;
        case "February":
            months += "Valentine's Day<br>President's Day<br><br>";
            break;
        case "March":
            months += "St. Patrick's Day<br>Easter Sunday<br><br>";
            break;
        case "April":
            months += "April Fool's Day<br>Earth Day<br><br>";
            break;
        case "May":
            months += "Mother's Day<br>Memorial Day<br><br>";
            break;
        case "June":
            months += "Father's Day<br>Juneteenth<br><br>";
            break;
        case "July":
            months += "Independence Day<br>Bastille Day<br><br>";
            break;
        case "August":
            months += "Left Hander's Day<br>Women's Equality Day<br><br>";
            break;
        case "September":
            months += "Labor Day<br>Patriot's Day<br><br>";
            break;
        case "October":
            months += "Halloween<br>Columbus Day<br><br>";
            break;
        case "November":
            months += "Thanksgiving<br>Veteran's Day<br><br>";
            break;
        case "December":
            months += "Christmas Day<br>Festivus<br><br>";
            break;
    }
}
document.getElementById("holidays").innerHTML = months
}