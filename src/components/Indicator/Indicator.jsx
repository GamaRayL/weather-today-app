import { showWind, showUv } from "components/statements";
import style from "./styles.module.scss";

export const getIndicatorsArray = (weatherDataFromApi, unit) => {
  if (!weatherDataFromApi) return [];
  const current = weatherDataFromApi.current;
  const forecastDay = weatherDataFromApi.forecast.forecastday[0];
  const location = weatherDataFromApi.location;
  return [
    {
      head: "Local Time",
      parameter: new Date(location.localtime).toLocaleString("ru-RU", {
        hour: "numeric",
        minute: "numeric",
      }),
    },
    {
      head: "Feels like",
      parameter: unit
        ? Math.round(current.feelslike_c) + "°"
        : Math.round(current.feelslike_f) + "°",
      img: "./images/weatherIcons/thermometer.svg",
    },
    {
      head: "Sunrise",
      parameter: forecastDay.astro.sunrise,
      img: "./images/weatherIcons/sunrise.svg",
    },
    {
      head: "Sunset",
      parameter: forecastDay.astro.sunset,
      img: "./images/weatherIcons/sunset.svg",
    },
    {
      head: "Humidity",
      parameter: current.humidity,
      img: "./images/weatherIcons/humidity.svg",
    },
    {
      head: "Min temperature",
      parameter: unit
        ? Math.round(forecastDay.day.mintemp_c) + "°"
        : Math.round(forecastDay.day.mintemp_f) + "°",
      img: "./images/weatherIcons/thermometer-colder.svg",
    },
    {
      head: "Max temperature",
      parameter: unit
        ? Math.round(forecastDay.day.maxtemp_c) + "°"
        : Math.round(forecastDay.day.maxtemp_f) + "°",
      img: "./images/weatherIcons/thermometer-warmer.svg",
    },
    {
      head: "Wind speed",
      parameter: Math.round(current.wind_mph) + " mph",
      img: showWind(Math.round(current.wind_mph)),
    },
    {
      head: "Visibility",
      parameter: current.vis_km,
    },
    {
      head: "Ultraviolet index",
      parameter: current.ub,
      img: showUv(current.uv),
    },
  ];
};

export const Indicator = ({ arIndicators }) => {
  return arIndicators.map((item) => (
    <div key={item.head} className={style.indicator}>
      <p>{item.head}</p>
      <div className={style.box}>
        <span className={style.parameter}>{item.parameter}</span>
        {item.img ? (
          <img className={style.icon} src={item.img} alt="weather icon" />
        ) : null}
      </div>
    </div>
  ));
};
