import moment from "moment-timezone";
import { useCityHowWas } from "../hooks/useCityHowWas";
import { CityHowWassProps } from "../interfaces/inputs";
import { FORMAT_DAY } from "../constants";

const CityHowWas = ({ nameCity, lat, lon }: CityHowWassProps) => {
  const { cityHowWass, isLoading, isError } = useCityHowWas({
    lat,
    lon,
  });

  if (
    isError &&
    isError.map((error: { message: any }) => error.message).includes("404")
  ) {
    return (
      <div className="flex items-center justify-center text-lg h-80">
        Error... City not found
      </div>
    );
  }
  
  return (
    <div className="px-6 py-8 mt-4 rounded-lg bg-slate-200">
      {isLoading ? (
        <div className="flex items-center justify-center text-lg h-80">
          Loading...
        </div>
      ) : (
        <>
          <h3 className="pb-6 text-3xl font-display">
            How was the weather in {nameCity}?
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {cityHowWass.map((dia) => (
              <div key={dia.dt} className="p-4 text-center rounded-lg bg-slate-300">
                <p className="text-lg">
                  {moment(dia.dt! * 1000).format(FORMAT_DAY)}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dia.weather![0].icon
                  }@2x.png`}
                  alt={dia.weather![0].main}
                  className="block mx-auto"
                />
                <p className="text-lg">
                  {dia.weather![0].main} - {dia.weather![0].description}
                </p>
                <p className="text-2xl">
                  {parseFloat(String(dia.temp)).toFixed(0)}{" "}
                  <span>&#x2103;</span>
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CityHowWas;
