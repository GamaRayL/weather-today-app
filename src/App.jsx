import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchGeonamesDate, fetchWeatherDate } from "utils/async";
import { Window, Toggle, Search } from "components/";
import { IndicatorsArray } from "components/Indicator";
import arWeatherIcons from "store/weather.json";
import css from "./App.module.scss";

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Kiev");
  const [geonames, setGeonames] = useState();
  const [weatherDataFromApi, setWeatherDataFromApi] = useState(false);
  const [valueOfCity, setValueOfCity] = useState("");
  const [correctCity, setCorrectCity] = useState("");
  const [error, setError] = useState("");
  const codeCurrentReceived = weatherDataFromApi
    ? weatherDataFromApi.current.condition.code
    : null;
  const weatherItem = arWeatherIcons.filter(
    (item) => item.code === codeCurrentReceived
  );
  const currentHours = weatherDataFromApi
    ? new Date(weatherDataFromApi.location.localtime).getHours()
    : null;

  useEffect(() => {
    fetchWeatherDate(city).then((data) =>
      data.error ? setError(data.error.message) : setWeatherDataFromApi(data)
    );
  }, [city]);

  fetchGeonamesDate().then((data) =>
    data.status ? console.log(data.status.message) : setGeonames(data)
  );

  const indicatorsOfArray = useMemo(
    () => IndicatorsArray(weatherDataFromApi, unit),
    [weatherDataFromApi, unit]
  );

  const showCurrentWeatherIcon = () => {
    if (currentHours >= 21 && currentHours <= 6) {
      return weatherItem[0].night;
    } else {
      return weatherItem[0].day;
    }
  };

  const showForWholeDayWeatherIcon = useCallback((item) => {
    const weatherItem = arWeatherIcons.filter(
      (el) => el.code === item.condition.code
    );
    const hour = new Date(item.time).getHours();
    if (hour >= 21 || hour <= 6) return weatherItem[0].night;
    else return weatherItem[0].day;
  }, []);

  const changeCity = (coordinates) => {
    setCity(coordinates.lat + "," + coordinates.lng);
    setCorrectCity(coordinates.name);
    setValueOfCity("");
  };

  const unitChanger = () => {
    setUnit(!unit);
  };

  if (!weatherDataFromApi) {
    return <div className={css.error}>{error}</div>;
  }

  const date = new Date(
    weatherDataFromApi.location.localtime.replace(/-/g, "/")
  ).toLocaleString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const forecastDayReceivedArray =
    weatherDataFromApi.forecast.forecastday[0].hour.map((item) => item);
  const weatherItemsArrayByHour = forecastDayReceivedArray.filter(
    (item) => new Date(item.time).getHours() > currentHours
  );

  return (
    <div className={css.app}>
      <div className={css.container}>
        <Window
          unit={unit}
          correctCity={correctCity}
          current={weatherDataFromApi.current}
          location={weatherDataFromApi.location}
          date={date}
          showCurrentWeatherIcon={showCurrentWeatherIcon}
          showForWholeDayWeatherIcon={showForWholeDayWeatherIcon}
          weatherItemsArrayByHour={weatherItemsArrayByHour}
          indicatorsOfArray={indicatorsOfArray}
        />
      </div>
      <div className={css.container}>
        <Toggle
          onClick={unitChanger}
          onChange={unitChanger}
          left={"°C"}
          right={"°F"}
        ></Toggle>
        <Search
          setCity={setCity}
          setValueOfCity={setValueOfCity}
          valueOfCity={valueOfCity}
          getGeonamesArray={fetchGeonamesDate}
          geonames={geonames}
          changeCity={changeCity}
        />
      </div>
    </div>
  );
}

export default App;
