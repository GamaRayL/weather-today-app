import { Indicator } from "components/Indicator";
import { TodayForecast } from "components/TodayForecast";
import css from "./Window.module.scss";

export const Window = ({
  unit,
  correctCity,
  current,
  location,
  weatherItemsArrayByHour,
  date,
  showCurrentWeatherIcon,
  showForWholeDayWeatherIcon,
  indicatorsOfArray,
}) => {
  return (
    <div className={css.window}>
      <div className={css.primary}>
        <div className={css.primary__icon}>
          <img alt="current weather icon" src={showCurrentWeatherIcon()} />
        </div>
        <div className={css.primary__indication}>
          <div className={css.primary__temp}>
            {unit ? Math.round(current.temp_c) : Math.round(current.temp_f)}
            &deg;
          </div>
          <div className={css.primary__condition}>{current.condition.text}</div>
          <div className={css.primary__city}>
            {correctCity ? correctCity : location.name}
          </div>
          <div className={css.primary__country}>{location.country}</div>
          <div className={css.primary__date}>{date}</div>
        </div>
      </div>
      <div className={css.secondary}>
        <div className={css.secondary__day}>
          <Indicator indicatorsOfArray={indicatorsOfArray} />
        </div>
        <div className={css.secondary__forecastDay}>
          <TodayForecast
            unit={unit}
            weatherItemsArrayByHour={weatherItemsArrayByHour}
            showForWholeDayWeatherIcon={showForWholeDayWeatherIcon}
          />
        </div>
      </div>
    </div>
  );
};
