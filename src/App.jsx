import { WeatherWidget } from "components/WeatherWidget";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <WeatherWidget />
    </div>
  );
}

export default App;
