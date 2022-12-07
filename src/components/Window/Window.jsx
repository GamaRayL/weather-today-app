import { useMemo } from "react";
import { Indicator, arIndicators } from "components/Indicator";
import { TodayForecast } from "components/TodayForecast";
import { getDate } from "utils/func";
import arWeather from "store/weather.json";
import style from "./styles.module.scss";

export const Window = (props) => {
  const { unit, correctCity, weatherDataFromApi } = props;

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

  const indicatorsArray = useMemo(
    () => arIndicators(weatherDataFromApi, unit),
    [weatherDataFromApi, unit]
  );

  const arForecastDayReceive =
    weatherDataFromApi.forecast.forecastday[0].hour.map((item) => item);

  const arWeatherItemsByHour = arForecastDayReceive.filter(
    (item) => new Date(item.time).getHours() > currentHours
  );

  return (
    <div className={style.window}>
      <div className={style.primary}>
        <div className={style.primary__icon}>
          <img alt="current weather icon" src={showCurrentWeatherIcon()} />
        </div>
        <div className={style.primary__indication}>
          <div className={style.primary__temp}>
            {unit
              ? Math.round(weatherDataFromApi.current.temp_c)
              : Math.round(weatherDataFromApi.current.temp_f)}
            &deg;
          </div>
          <div className={style.primary__condition}>
            {weatherDataFromApi.current.condition.text}
          </div>
          <div className={style.primary__city}>
            {correctCity ? correctCity : weatherDataFromApi.location.name}
          </div>
          <div className={style.primary__country}>
            {weatherDataFromApi.location.country}
          </div>
          <div className={style.primary__date}>
            {getDate(weatherDataFromApi)}
          </div>
        </div>
      </div>
      <div className={style.secondary}>
        <div className={style.secondary__day}>
          <Indicator indicatorsArray={indicatorsArray} />
        </div>
        <div className={style.secondary__forecastDay}>
          <TodayForecast
            unit={unit}
            arWeatherItemsByHour={arWeatherItemsByHour}
          />
        </div>
      </div>
    </div>
  );
};
