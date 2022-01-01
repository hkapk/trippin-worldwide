
// dummy number for circle size, cityCount will be per city
// more times a city has been traveled to, larger the circle
let cityCount = 100000;

// Fetch map data
async function initMap(event) {
  try {
    const response = await fetch('/api/locations');
    const citymap = await response.json();
    return citymap;
  } catch (error) {
    console.log(error);
  }
};

// Initialize the map
initMap().then(citymap => {
  citymap; // fetched locations

  // Add the map and markers
  constructCircles(citymap);
});

function constructCircles(citymap) {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 37.09, lng: -95.712 },
    mapTypeId: "terrain"
  });

  citymap.forEach(location => {
    // Add the circle for this city to the map.
    let city = location.city;
    let country = location.country;
    getCitymapData(city, country)
      .then((response) => {
        let cityData = response;
        let lat = cityData.cityLat;
        let lng = cityData.cityLng;
        const cityCircle = new google.maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map,
          center: { lat: lat, lng: lng },
          radius: Math.sqrt(cityCount) * 100,
        });
      });
  });
};

async function getCitymapData(city, country) {
  //console.log(city, country);
  //let countryCode = await getCountryCode(country);
  let countryCode = 'US';
  //let gMapKey = process.env.GOOGLE_MAP_API_KEY;
  let gMapKey = 'AIzaSyAR4BrHtt6FMtMUXzvCiTuVPiDyg0rTvCQ';
  let url = `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${city}|country:${countryCode}&key=${gMapKey}`;

  try {
    const response = await fetch(url);
    const cityData = await response.json();
    const cityLat = cityData.results[0].geometry.location.lat;
    const cityLng = cityData.results[0].geometry.location.lng;
    const singleCityData = { city, cityLat, cityLng };
    return singleCityData;
  } catch (error) {
    console.log(error);
  }
};

// async function getCountryCode(country) {
// work-in-progress

// }

//document.querySelector('.map').addEventListener('submit', initMap);