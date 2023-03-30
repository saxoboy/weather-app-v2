import moment from "moment";
import { WiSunrise, WiSunset, WiHumidity } from "react-icons/wi";
import { useCityToday } from "../hooks/useCityToday";
import { CityTodayProps } from "../interfaces/inputs";
import { FORMAT_DAY, FORMAT_HOURS } from "../constants/index";

const CityToday = ({ nameCity }: CityTodayProps) => {
  const { cityToday, isLoading, isError } = useCityToday({ nameCity });
  
  const day = moment((cityToday?.dt || 0) * 1000).format(FORMAT_DAY);
  const horaInCity = moment((cityToday?.dt || 0) * 1000).format(FORMAT_HOURS);
  const sunrise = moment((cityToday?.sys.sunrise || 0) * 1000).format(
    FORMAT_HOURS //.tz(timezone)
  );
  const sunset = moment((cityToday?.sys.sunset || 0) * 1000).format(
    FORMAT_HOURS //.tz(timezone)
  );

  if (isError) {
    return (
      <div className="flex items-center justify-center text-lg h-80">
        Error...
      </div>
    );
  }

  return (
    <div className="p-4 mt-4 bg-slate-200">
      {isLoading ? (
        <div className="flex items-center justify-center text-lg h-80">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="flex-shrink-0 h-40 mx-auto bg-indigo-200 rounded-full sm:w-48 sm:h-48 w-30">
              <img
                src={`https://openweathermap.org/img/wn/${cityToday?.weather[0].icon}@4x.png`}
                alt={cityToday?.weather[0].main}
                className="block"
              />
            </div>
            <p className="py-4 text-center uppercase">
              {cityToday?.weather[0].main} - {cityToday?.weather[0].description}
            </p>
          </div>
          <div className="w-full px-8 sm:w-1/2 md:w-2/4">
            <p className="pt-2 pb-2 font-display">{day}</p>
            <p className="pb-4">{horaInCity}</p>
            <h2 className="mb-2 text-4xl font-medium text-center text-slate-900 font-display">
              {cityToday?.name}
            </h2>
            <div className="flex flex-wrap">
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
            className="w-full pt-12 bg-no-repeat sm:w-1/2 md:w-1/4"
            style={{
              backgroundImage: `url(https://openweathermap.org/img/wn/${cityToday?.weather[0].icon}@2x.png)`,
              backgroundPosition: "8em -1em",
            }}
          >
            <div className="py-2">
              Sunrise:
              <WiSunrise size={48} color="#000" className="inline-block mx-2" />
              {sunrise}
            </div>
            <div className="py-2">
              Sunset:
              <WiSunset size={48} color="#000" className="inline-block mx-2" />
              {sunset}
            </div>
            <div className="py-2">
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
