const API_KEY = "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";
let activities = [];
const weatherMap = new Map(JSON.parse(localStorage.getItem("weatherMap") || "[]"));
const MAPS_API_KEY = "AIzaSyDjTIC-8eUPbkllv_jLs1ZNCHnnz2NbjKM";
let markersArray = [];
let currentInfoWindow = null;

async function setDestination() {
    let destination = document.getElementById("destination").value;
    const storedDestination = localStorage.getItem("destination");
    if(destination === "") {
        alert("A Destination Is Required");
        destination = `<br>`;
        document.getElementById("destination").value = storedDestination;
    } else {
        const question = `Is ${destination} considered a place? Please answer only yes or no with no punctuation.`
        const isADestination = await getDescription(question);
        if (isADestination == "No") {
            alert("A Destination Is Required")
            document.getElementById("destination").value = "";
        } else {
            localStorage.setItem("destination", destination);
            document.getElementById("setDestination").innerHTML = destination;
            document.getElementById("directions").innerHTML = "Add Activities For Your Trip To Continue";
        }
    }
}

async function addActivity() {
    const storedDestination = localStorage.getItem("destination");
    if (storedDestination == null){
        alert("A Destination Is Required")
    } else {
        const activity = document.getElementById("activity").value;
        const date = document.getElementById("activityDate").value;

        if (activity === "" || date === "") {
            alert("An Activity and Date Is Requied");
        } else {
            const prompt = `Describe ${activity} in ${storedDestination} in 2 sentences.`;
            const description = await getDescription(prompt);

            const activityObj = {
                name: activity,
                date: new Date(date).toISOString(),
                description: description,
                averageCost: "",
                weather: ""
            };
            
            activities.push(activityObj);
            activities.sort((a, b) => new Date(a.date) - new Date(b.date));
            localStorage.setItem("activities", JSON.stringify(activities));
            displayActivities();
        }
    }
}

function removeActivity(removeActivity) {
    const index = activities.findIndex(activity => activity.name === removeActivity);
    if (index > -1) {
        activities.splice(index, 1);
        localStorage.setItem("activities", JSON.stringify(activities));
        displayActivities();
    }
}

function displayActivities() {
    document.querySelector(".activities").innerHTML = "";

    activities.forEach(activity => {
        let activityCard = document.createElement("div");
        activityCard.className = "activityCard";
        activityCard.innerHTML = `
            <h3>${activity.name}</h3>
            <p>${activity.description}</p>
            <p>Date: ${formatDate(new Date(activity.date))}</p>
            <button onclick="removeActivity('${activity.name}')">Remove</button>
        `;
        document.querySelector(".activities").appendChild(activityCard);
    });
}

async function getDescription(prompt) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        
        return aiResponse;

    } catch (error) {
        return error.message;
    }
}

function formatDate(date) {
    const day = date.getDate() + 1;
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const suffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        return ['th', 'st', 'nd', 'rd'][day % 10] || 'th';
    };

    return `${month} ${day}${suffix(day)}, ${year}`;
}

function setBudget() {
    let budget = document.getElementById("budget").value;
    const storedBudget = localStorage.getItem("budget");
    if(budget === "") {
        alert("A Budget Is Required");
        document.getElementById("budget").value = storedBudget;
    }
    else if (isNaN(budget)) {
        alert("The Budget Must Be Numerical");
        document.getElementById("budget").value = storedBudget;
    }
    else if (document.querySelector(".budget").innerHTML.trim() != "") {
        let budget = document.getElementById("budget").value;
        localStorage.setItem("budget", budget);

        loadBudget();
    }
    else {
        localStorage.setItem("budget", budget);
        localStorage.setItem("remainingBudget", budget);
        document.getElementById("setBudget").innerHTML = `Remaining Budget: $${budget}`;
    }
}

function loadItinerary() {
    const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
    activities = storedActivities;
    if (activities.length > 0) {
        displayActivities();
    }
}

function loadIndex() {
    const storedDestination = localStorage.getItem("destination");
    if (storedDestination) {
        document.getElementById("setDestination").innerHTML = storedDestination;
        if(storedDestination !== `<br>`) {
            document.getElementById("destination").value = storedDestination;
        }
    }
    const storedActivities = localStorage.getItem("activities");
    activities = storedActivities ? JSON.parse(storedActivities) : [];
    if (storedDestination && (!storedActivities || activities.length == 0)) {
        document.getElementById("directions").innerHTML = "Add Activities For Your Trip To Continue";
    }
    const storedBudget = localStorage.getItem("budget");
    if (storedDestination && activities.length > 0 && storedBudget == null) {
        document.getElementById("directions").innerHTML = "Make Sure To Set A Budget"
    }
    if (storedDestination && storedActivities && storedBudget) {
        document.getElementById("directions").innerHTML = "Check Out Locations For Your Activities and the Weather"
    }
}

async function loadBudget() {
    document.querySelector(".budget").innerHTML = "";
    const storedBudget = localStorage.getItem("budget");
    document.getElementById("budget").value = storedBudget;
    
    let remainingBudget = storedBudget;
    const storedDestination = localStorage.getItem("destination");
    if (storedDestination) {
        const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
        activities = storedActivities;
        if (activities.length > 0) {
            for (const activity of activities) {
                if (activity.averageCost == "") {
                    const question = `What is the average cost for ${activity.name} in ${storedDestination}? 
                                Please provide just the dollar amount in the middle of the range with no other text.`;
                    const description = await getDescription(question);
                    activity.averageCost = description;
                }
                remainingBudget = remainingBudget - activity.averageCost.replace("$", "");

                let activityCard = document.createElement("div");
                activityCard.className = "activityCard";
                activityCard.innerHTML = `
                    <h3>${activity.name}</h3>
                    <p>${activity.averageCost}</p>`;
                document.querySelector(".budget").appendChild(activityCard);
            }
            localStorage.setItem("activities", JSON.stringify(activities));
        }
    }
    if (remainingBudget != null) {
        document.getElementById("setBudget").innerHTML = `Remaining Budget: $${remainingBudget}`;
    }
    localStorage.setItem("remainingBudget", remainingBudget);
}

async function loadWeather() {
    const storedDestination = localStorage.getItem("destination");
    if (storedDestination) {
        const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
        activities = storedActivities;
        if (activities.length > 0) {
            for (const activity of activities) {
                const date = formatDate(new Date(activity.date));
                if (weatherMap.has(date)) {
                    activity.weather = weatherMap.get(date);
                } else {
                    const question = `What is the weather for Honolulu, Hawaii on June 23rd, 2025? I am looking for the high/low temp, chance for rain percent, wind speed, cloud coverage and humidity. I also want to know the confidence percentage of this forecast as one number with the percent sign. Please list out only this information with br tags in between each piece of info and do not use bullets. I want the info following this format:
                                    91°F / 77°F
                                    10% chance of rain
                                    8 mph wind speed
                                    Partly cloudy
                                    72% humidity
                                    85% confidence percent`;
                    const weather = await getDescription(question);
                    activity.weather = weather;
                    weatherMap.set(date, weather);
                }
            }
            localStorage.setItem("activities", JSON.stringify(activities));
            localStorage.setItem("weatherMap", JSON.stringify(Array.from(weatherMap.entries())));

            const weatherArray = Array.from(weatherMap.entries()).map(([date, weather]) => ({
                date: parseDate(date),
                weather: weather
            }));
            weatherArray.sort((a, b) => new Date(a.date) - new Date(b.date));
            weatherMap.clear();
            weatherArray.forEach(({ date, weather }) => {
                const newDate = new Date(date);
                newDate.setDate(newDate.getDate() - 1);
                weatherMap.set(newDate.toISOString(), weather);
            });
            weatherMap.forEach((weather, date) => {
                let activityCard = document.createElement("div");
                activityCard.className = "activityCard";
                activityCard.innerHTML = `
                    <h3>${formatDate(new Date(date))}</h3>
                    <p>${weather}</p>`;
                document.querySelector(".weather").appendChild(activityCard);
            });
        } else {
            document.querySelector(".weather").innerHTML = "Activities and Dates Are Required";
        }
    } else {
        document.querySelector(".weather").innerHTML = "A Destination Is Required";
    }
}

function parseDate(dateStr) {
    const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleanDateStr);
}

async function loadMap() {
    const storedDestination = localStorage.getItem("destination");
    if (storedDestination) {
        const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
        activities = storedActivities;

        const mapContainer = document.createElement("div");
        mapContainer.id = "map";
        mapContainer.style.width = "800px";
        mapContainer.style.height = "350px";
        document.querySelector(".map").appendChild(mapContainer);

        const map = await initMap(storedDestination);
        if (activities.length > 0) {
            for (const activity of activities) {
                let activityCard = document.createElement("div");
                activityCard.className = "activityCard";
                activityCard.innerHTML = `<h3>${activity.name}</h3>`;
                activityCard.style.cursor = "pointer";
                
                activityCard.addEventListener("click", async () => {
                    alert(`You clicked on: ${activity.name}`);
                    try {
                        const { lat, lng } = await geocodeDestination(storedDestination);
                        clearMarkers();
                        const places = await fetchPlaces(lat, lng, activity.name);
                        const placesMap = new Map();
                        const formattedPlaces = places.map(place => [
                            place.name,
                            place.address,
                            place.rating,
                            place.priceLevel,
                            place.location.lat,
                            place.location.lng
                        ]);
                        placesMap.set(activity.name, formattedPlaces);

                        placesMap.forEach((placesArray, activityName) => {
                            placesArray.forEach(place => {
                                const [name, address, rating, price, lat, lng] = place;
                                addMarker({ name, address, rating, price, lat, lng }, map);
                            });
                        });
                    } catch (error) {
                        console.error(error);
                    }
                });

                document.querySelector(".map").appendChild(activityCard);
            }
        } else {
            document.querySelector(".map").innerHTML = "Activities and Dates Are Required";
        }
    } else {
        document.querySelector(".map").innerHTML = "A Destination Is Required";
    }
}

async function initMap(destination) {
    const geocoder = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
        geocoder.geocode({ address: destination }, (results, status) => {
            if (status === "OK") {
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 12,
                    center: results[0].geometry.location,
                });

                new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    title: destination,
                });

                resolve(map);
            } else {
                reject("Geocode was not successful for the following reason: " + status);
            }
        });
    });
}

async function geocodeDestination(destination) {
    const geocoder = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
        geocoder.geocode({ address: destination }, (results, status) => {
            if (status === "OK") {
                const location = results[0].geometry.location;
                resolve({ lat: location.lat(), lng: location.lng() });
            } else {
                reject("Geocode was not successful for the following reason: " + status);
            }
        });
    });
}

async function fetchPlaces(lat, lng, keyword) {
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    return new Promise((resolve, reject) => {
        const request = {
            location: new google.maps.LatLng(lat, lng),
            radius: '5000',
            keyword: keyword
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const places = results.map(place => ({
                    name: place.name,
                    address: place.formatted_address || place.vicinity,
                    rating: place.rating || 'N/A',
                    priceLevel: place.price_level || 'N/A',
                    location: {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    }
                }));
                resolve(places);
            } else {
                reject('Places request failed due to: ' + status);
            }
        });
    });
}

function addMarker(place, map) {
    const marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map,
        title: place.name
    });

    markersArray.push(marker);

    const infoWindowContent = `
        <div>
            <h3>${place.name}</h3>
            <p><strong>Address:</strong> ${place.address || 'N/A'}</p>
            <p><strong>Rating:</strong> ${place.rating || 'N/A'}</p>
            <p><strong>Price Level:</strong> ${place.price || 'N/A'}</p>
        </div>
    `;

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });

    marker.addListener('click', () => {
        if (currentInfoWindow === infoWindow) {
            currentInfoWindow.close();
            currentInfoWindow = null;
        } else {
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }
            infoWindow.open(map, marker);
            currentInfoWindow = infoWindow;
        }
    });    
}

function clearMarkers() {
    for (let i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray = [];
}