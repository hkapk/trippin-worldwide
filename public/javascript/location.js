
// require('dotenv').config();

async function initMap() {
    try {
        const response = await fetch('/api/locations');
        const citymap = await response.json();
        return citymap;
    } catch (error) {
        console.log(error);
    }
};

initMap().then(citymap => {
    citymap; // fetched locations
    console.log(citymap);

    // Create the map.
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 37.09, lng: -95.712 },
        mapTypeId: "terrain",
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.    
    let i = 0;
    let cities = [];

    citymap.forEach(location => {
        // Add the circle for this city to the map.        
        let city = location.city;
        let country = location.country;
        let cityData = getCitymapData(city, country);
        console.log(cityData);
        cities.push(cityData);
        let uniqueCities = [...new Set(cities)];
        cityCount = i++;
        const cityCircle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map,
            center: { lat: cityData.lat, lng: cityData.lng },
            radius: Math.sqrt(cityCount) * 100,
        });
    })
});

async function getCitymapData(city, country) {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${city}|country:${country}&key=AIzaSyAR4BrHtt6FMtMUXzvCiTuVPiDyg0rTvCQ`;

    try {
        const response = await fetch(url);
        const cityData = await response.json();
        return cityData;
    } catch (error) {
        console.log(error);
    }
};
