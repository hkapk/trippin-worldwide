// Fetch map data
async function initMap(event) {
  event.preventDefault();

  const response = await fetch('/api/locations');
  const citymap = await response.json();
  const cityData = citymap.JSON.stringify({
    cityId,
    cityLat,
    cityLng,
    country
  })

  if (response.ok) {
    document.location.replace('/location');
    return cityData;
  } else {
    alert(response.statusText);
  }

  // try {
  //     const response = await fetch('/api/locations');
  //     const citymap = await response.json();
  //     return citymap;
  // } catch (error) {
  //     console.log(error);
  // }
  // if (response.ok) {
  //     document.location.replace('/dashboard');
  // } else {
  //     alert(response.statusText);
  // }
};

document.querySelector('#map').addEventListener('fullscreenchange', initMap);