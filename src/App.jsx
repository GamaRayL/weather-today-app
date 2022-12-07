import { useState } from "react";
import { Window, Toggle, Search } from "components/";
import css from "./App.module.scss";

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Kiev");
  const [valueOfCity, setValueOfCity] = useState("");
  const [correctCity, setCorrectCity] = useState("");

  const onChangeCityHandler = (coordinates) => {
    setCity(coordinates.lat + "," + coordinates.lng);
    setCorrectCity(coordinates.name);
    setValueOfCity("");
  };

  const onChangeUnitHandler = () => {
    setUnit(!unit);
  };

  return (
    <div className={css.app}>
      <div className={css.container}>
        <Window unit={unit} correctCity={correctCity} city={city} />
      </div>
      <div className={css.container}>
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
    </div>
  );
}

export default App;
