import { useEffect, useState } from "react";
import { Window, Search, Toggle } from "components";
import { fetchWeatherData } from "utils/async";
import style from "./WeatherWidget.module.scss";

export const WeatherWidget = () => {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Kiev");
  const [valueOfCity, setValueOfCity] = useState("");
  const [correctCity, setCorrectCity] = useState("");
  const [weatherDataFromApi, setWeatherDataFromApi] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeatherData(city).then((data) =>
      data.error ? setError(data.error.message) : setWeatherDataFromApi(data)
    );
  }, [city, setError, setWeatherDataFromApi]);

  const onChangeCityHandler = (coordinates) => {
    setCity(coordinates.lat + "," + coordinates.lng);
    setCorrectCity(coordinates.name);
    setValueOfCity("");
  };

  const onChangeUnitHandler = () => {
    setUnit(!unit);
  };

  if (!weatherDataFromApi) return <div className={style.error}>{error}</div>;

  return (
    <>
      <div className={style.container}>
        <Window
          unit={unit}
          correctCity={correctCity}
          weatherDataFromApi={weatherDataFromApi}
        />
      </div>
      <div className={style.container}>
        <Toggle
          onChange={onChangeUnitHandler}
          left={"°C"}
          right={"°F"}
        ></Toggle>
        <Search
          setValueOfCity={setValueOfCity}
          valueOfCity={valueOfCity}
          changeCity={onChangeCityHandler}
        />
      </div>
    </>
  );
};
