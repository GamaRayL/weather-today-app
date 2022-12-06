export const fetchWeatherDate = async (city) => {
  const api = `http://api.weatherapi.com/v1/forecast.json?key=a0961b2c48bd4a78a2280512221204&q=${city}`;

  try {
    return await (await fetch(api)).json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchGeonamesDate = async (e) => {
  const api = `https://secure.geonames.org/searchJSON?name_startsWith=${e}&maxRows=4&username=gama_ray`;

  try {
    return await (await fetch(api)).json();
  } catch (error) {
    console.log(error);
  }
};

