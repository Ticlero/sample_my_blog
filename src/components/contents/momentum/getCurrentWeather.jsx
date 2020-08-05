const URL = "https://api.openweathermap.org/data/2.5/weather?";
const W_API_KEY = `9f69174ea1903602a0a38929cabb328a`;
const COORDS = `coords`;
const WEATHER = `weather`;

const getWeather = (lati, longi) => {
  const lat = lati;
  const lon = longi;
  const requestURL = `${URL}lat=${lat}&lon=${lon}&appid=${W_API_KEY}&units=metric`;

  fetch(requestURL)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const wObj = {
        temperature: json.main.temp,
        place: json.name,
      };
      localStorage.setItem(WEATHER, JSON.stringify(wObj));
    });
};

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSuccess = (pos) => {
  const crd = pos.coords;
  const lati = crd.latitude;
  const longi = crd.longitude;

  const crdObj = {
    latitude: lati,
    longitude: longi,
  };
  saveCoords(crdObj);
  getWeather(lati, longi);
};

const handleGeoFail = () => {
  console.error("Weather API loaded fail");
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null || loadedCoords === "") {
    askForCoords();
  } else {
    const crdObj = JSON.parse(loadedCoords);
    const lat = `${crdObj.latitude}`;
    const lon = `${crdObj.longitude}`;
    getWeather(lat, lon);
  }
};

export { loadCoords };
