import { useState } from "react";
import { fetchGeonamesData } from "utils/async";
import css from "./Search.module.scss";

export const Search = ({ setValueOfCity, valueOfCity, changeCity }) => {
  const [geonames, setGeonames] = useState();

  const onChangeHandler = (e) => {
    const value = e.target.value;

    setValueOfCity(value);
    fetchGeonamesData(value).then((data) =>
      data.status ? console.log(data.status.message) : setGeonames(data)
    );
  };

  return (
    <div className={css.container}>
      <input
        value={valueOfCity}
        className={css.input}
        onChange={onChangeHandler}
        placeholder="ENTER THE CITY"
        type="text"
      />
      <div className={css.boxLocation}>
        {valueOfCity === "" || geonames === undefined
          ? null
          : geonames.geonames.map((i) => (
              <div
                className={css.cardLoaction}
                key={i.geonameId}
                onClick={() => changeCity(i)}
              >
                <div className={css.box}>
                  <span className={css.city}>{i.name}</span>
                  <span className={css.countryCode}>({i.countryCode})</span>
                  <span className={css.countryName}>{i.countryName}</span>
                </div>
                <div className={css.box}>
                  <span className={css.latitude}>latitude: {i.lat}</span>
                  <span className={css.longitude}>longitude: {i.lng}</span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
