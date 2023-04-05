import moment from "moment-timezone";
import { WiSunrise, WiSunset, WiHumidity } from "react-icons/wi";
import { useCityToday } from "../hooks/useCityToday";
import { CityTodayProps } from "../interfaces/inputs";
import { FORMAT_DAY, FORMAT_HOURS } from "../constants/index";
import { listCity } from "../data/listCity";

const CityToday = ({ nameCity, setDt }: CityTodayProps) => {
  const { cityToday, isLoading, isError } = useCityToday({ nameCity, setDt });
  setDt(cityToday?.dt || 0);

  //find timezone in listCity
  const timezone = listCity.find((city) => city.value === nameCity)?.timezone;

  const day = moment((cityToday?.dt || 0) * 1000)
    .tz(timezone || "")
    .format(FORMAT_DAY);
  const horaInCity = moment((cityToday?.dt || 0) * 1000)
    .tz(timezone || "")
    .format(FORMAT_HOURS);

  const sunrise = moment((cityToday?.sys.sunrise || 0) * 1000)
    .tz(timezone || "")
    .format(FORMAT_HOURS);
  const sunset = moment((cityToday?.sys.sunset || 0) * 1000)
    .tz(timezone || "")
    .format(FORMAT_HOURS);

  if (isError) {
    return (
      <div className="flex items-center justify-center text-lg h-80">
        Error...
      </div>
    );
  }

  return (
    <div className="p-4 mt-4 rounded-lg bg-slate-200">
      {isLoading ? (
        <div className="flex items-center justify-center text-lg h-80">
          Loading...
        </div>
      ) : (
        <div className="flex flex-col flex-wrap mb-4 lg:flex-row">
          <div className="w-full mx-auto lg:w-1/3">
            <div className="flex-shrink-0 w-32 h-40 mx-auto rounded-full bg-slate-400 sm:w-48 sm:h-48">
              <img
                src={`https://openweathermap.org/img/wn/${cityToday?.weather[0].icon}@4x.png`}
                alt={cityToday?.weather[0].main}
                className="block mx-auto"
              />
            </div>
            <p className="py-4 text-center uppercase">
              {cityToday?.weather[0].main} - {cityToday?.weather[0].description}
            </p>
          </div>
          <div className="w-full px-8 mx-auto lg:w-1/3">
            <p className="pt-2 pb-2 font-display">{day}</p>
            <p className="pb-4">{horaInCity}</p>
            <h2 className="mb-2 text-4xl font-medium text-center text-slate-900 font-display">
              {cityToday?.name}
            </h2>
            <div className="flex">
              <div className="flex-grow mt-8 text-center">
                Temp Min.
                <br />
                {parseInt(cityToday?.main.temp_min.toString() || "0")}
                <span>&#x2103;</span>
              </div>
              <div className="flex-grow text-4xl text-center">
                {parseInt(cityToday?.main.temp?.toString() || "0")}
                <span>&#x2103;</span>
              </div>
              <div className="flex-grow mt-8 text-center">
                Temp Max.
                <br />
                {parseInt(cityToday?.main.temp_max.toString() || "0")}
                <span>&#x2103;</span>
              </div>
            </div>
          </div>
          <div
            className="w-full pt-12 mx-auto bg-no-repeat lg:w-1/3"
            style={{
              backgroundImage: `url(https://openweathermap.org/img/wn/${cityToday?.weather[0].icon}@2x.png)`,
              backgroundPosition: "8em -1em",
            }}
          >
            <div className="py-2 text-center">
              Sunrise:
              <WiSunrise size={48} color="#000" className="inline-block mx-2" />
              {sunrise}
            </div>
            <div className="py-2 text-center">
              Sunset:
              <WiSunset size={48} color="#000" className="inline-block mx-2" />
              {sunset}
            </div>
            <div className="py-2 text-center">
              Humidity:
              <WiHumidity
                size={48}
                color="#000"
                className="inline-block mx-2"
              />
              {cityToday?.main.humidity}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityToday;
