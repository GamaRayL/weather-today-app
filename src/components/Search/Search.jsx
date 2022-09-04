import css from "./Search.module.scss";

export const Search = ({
  geonames,
  getGeonamesArray,
  setValueOfCity,
  valueOfCity,
  changeCity,
}) => {
  return (
    <div className={css.container}>
      <input
        value={valueOfCity}
        className={css.input}
        onChange={(e) => {
          getGeonamesArray(e.target.value);
          setValueOfCity(e.target.value);
        }}
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
