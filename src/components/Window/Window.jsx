import { arIndicators } from "components/Indicator";
import { Indicator } from "components/Indicator";
import { TodayForecast } from "components/TodayForecast";
import { useEffect, useMemo, useState } from "react";
import arWeather from "store/weather.json";
import { fetchWeatherData } from "utils/async";
import { getDate } from "utils/const";
import css from "./Window.module.scss";

export const Window = ({ unit, correctCity, city }) => {
  const [weatherDataFromApi, setWeatherDataFromApi] = useState(false);
  const [error, setError] = useState("");

  const codeCurrentReceived = weatherDataFromApi
    ? weatherDataFromApi.current.condition.code
    : null;

  const weatherItem = arWeather.filter(
    (item) => item.code === codeCurrentReceived
  );

  const currentHours = weatherDataFromApi
    ? new Date(weatherDataFromApi.location.localtime).getHours()
    : null;

  const showCurrentWeatherIcon = () => {
    if (currentHours >= 21 && currentHours <= 6) {
      return weatherItem[0].night;
    } else {
      return weatherItem[0].day;
    }
  };

  useEffect(() => {
    fetchWeatherData(city).then((data) =>
      data.error ? setError(data.error.message) : setWeatherDataFromApi(data)
    );
  }, [city]);

  const indicatorsArray = useMemo(
    () => arIndicators(weatherDataFromApi, unit),
    [weatherDataFromApi, unit]
  );

  if (!weatherDataFromApi) {
    return <div className={css.error}>{error}</div>;
  }

  const arForecastDayReceive =
    weatherDataFromApi.forecast.forecastday[0].hour.map((item) => item);

  const arWeatherItemsByHour = arForecastDayReceive.filter(
    (item) => new Date(item.time).getHours() > currentHours
  );

  return (
    <div className={css.window}>
      <div className={css.primary}>
        <div className={css.primary__icon}>
          <img alt="current weather icon" src={showCurrentWeatherIcon()} />
        </div>
        <div className={css.primary__indication}>
          <div className={css.primary__temp}>
            {unit
              ? Math.round(weatherDataFromApi.current.temp_c)
              : Math.round(weatherDataFromApi.current.temp_f)}
            &deg;
          </div>
          <div className={css.primary__condition}>
            {weatherDataFromApi.current.condition.text}
          </div>
          <div className={css.primary__city}>
            {correctCity ? correctCity : weatherDataFromApi.location.name}
          </div>
          <div className={css.primary__country}>
            {weatherDataFromApi.location.country}
          </div>
          <div className={css.primary__date}>{getDate(weatherDataFromApi)}</div>
        </div>
      </div>
      <div className={css.secondary}>
        <div className={css.secondary__day}>
          <Indicator indicatorsArray={indicatorsArray} />
        </div>
        <div className={css.secondary__forecastDay}>
          <TodayForecast
            unit={unit}
            arWeatherItemsByHour={arWeatherItemsByHour}
          />
        </div>
      </div>
    </div>
  );
};
