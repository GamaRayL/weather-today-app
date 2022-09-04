import css from "./TodayForecast.module.scss";

export const TodayForecast = ({
  unit,
  weatherItemsArrayByHour,
  showForWholeDayWeatherIcon,
}) => {
  return (
    <>
      {weatherItemsArrayByHour.map((item) => (
        <div className={css.todayForecast} key={item.time_epoch}>
          <p>{new Date(item.time).getHours()}</p>
          <img
            className={css.icon}
            width="62px"
            src={showForWholeDayWeatherIcon(item)}
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
