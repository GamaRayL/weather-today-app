import { useCallback } from "react";
import arWeather from "store/weather.json";
import css from "./TodayForecast.module.scss";

export const TodayForecast = ({ unit, arWeatherItemsByHour }) => {
  const getWholeDayIcon = useCallback((item) => {
    const weatherItem = arWeather.filter(
      (el) => el.code === item.condition.code
    );
    const hour = new Date(item.time).getHours();
    if (hour >= 21 || hour <= 6) return weatherItem[0].night;
    else return weatherItem[0].day;
  }, []);

  return (
    <>
      {arWeatherItemsByHour.map((item) => (
        <div className={css.todayForecast} key={item.time_epoch}>
          <p>{new Date(item.time).getHours()}</p>
          <img
            className={css.icon}
            width="62px"
            src={getWholeDayIcon(item)}
            alt=""
          />
          <p className={css.temp}>
            {unit
              ? Math.round(item.temp_c) + "°"
              : Math.round(item.temp_f) + "°"}
          </p>
        </div>
      ))}
    </>
  );
};
