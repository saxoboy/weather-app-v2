import moment from "moment-timezone";
import { FORMAT_DAY } from "../constants";

const CityHowWas = () => {
  return (
    <div className="p-4 my-4 bg-slate-200">
      <div className="mt-4 bg-slate-300">
        <h3 className="pb-4 text-3xl font-display">
          How was the weather in {"name"}?
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {/* {cityPre.map((dia) => ( */}
            <div key={"dia.current.dt"} className="p-2 text-center bg-slate-400">
              <p className="text-lg">
                {"moment(dia.current.dt * 1000).format(FORMAT_DAY)"}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/{dia.current.weather[0].icon}@2x.png`}
                alt={"dia.current.weather[0].main"}
                className="block mx-auto"
              />
              <p className="text-lg">
                {"dia.current.weather[0].main"} -{" "}
                {"dia.current.weather[0].description"}
              </p>
              <p className="text-2xl">
                {"parseFloat(dia.current.temp).toFixed(0)"} <span>&#x2103;</span>
              </p>
            </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default CityHowWas;
