import { WeatherWidget } from "components/WeatherWidget";
import style from "./styles.module.scss";

function App() {
  return (
    <div className={style.app}>
      <WeatherWidget />
    </div>
  );
}

export default App;
