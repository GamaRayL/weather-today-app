export const fetchWeatherData = async (city) => {
  const api = `http://api.weatherapi.com/v1/forecast.json?key=a0961b2c48bd4a78a2280512221204&q=${city}`;

  try {
    return await (await fetch(api)).json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchGeonamesData = async (value) => {
  const api = `https://secure.geonames.org/searchJSON?name_startsWith=${value}&maxRows=4&username=gama_ray`;

  try {
    return await (await fetch(api)).json();
  } catch (error) {
    console.log(error);
  }
};
