import { useRef } from "react";
import { useState } from "react";
import { fetchGeonamesData } from "utils/async";
import style from "./styles.module.scss";

export const Search = (props) => {
  const { setValueOfCity, valueOfCity, changeCity } = props;
  const [geonames, setGeonames] = useState();
  const [err, setErr] = useState();
  const locationRef = useRef(null);

  const onChangeHandler = (e) => {
    const value = e.target.value;

    setValueOfCity(value);
    fetchGeonamesData(value).then((data) =>
      data.status ? setErr(data.status.message) : setGeonames(data)
    );
  };

  const onClickScrollHandler = () => {
    locationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onClickCardHandler = (e) => {
    changeCity(e);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (err) return <div>{err.toUpperCase()}</div>;

  return (
    <div className={style.container}>
      <input
        value={valueOfCity}
        className={style.input}
        onClick={onClickScrollHandler}
        onChange={onChangeHandler}
        placeholder="ENTER THE CITY"
        type="text"
      />
      <div className={style.boxLocation} ref={locationRef}>
        {valueOfCity === "" || geonames === undefined
          ? null
          : geonames.geonames.map((i) => (
              <div
                className={style.cardLoaction}
                key={i.geonameId}
                onClick={() => onClickCardHandler(i)}
              >
                <div className={style.box}>
                  <span className={style.city}>{i.name}</span>
                  <span className={style.countryCode}>({i.countryCode})</span>
                  <span className={style.countryName}>{i.countryName}</span>
                </div>
                <div className={style.box}>
                  <span className={style.latitude}>latitude: {i.lat}</span>
                  <span className={style.longitude}>longitude: {i.lng}</span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
