import { useState } from "react";
import { SWRConfig } from "swr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CityHowWas from "./components/CityHowWas";
import CityHowWill from "./components/CityHowWill";
import CitysList from "./components/CitysList";
import CityToday from "./components/CityToday";

function App() {
  const [nameCity, setNameCity] = useState("Quito, EC");
  const [lat, setLat] = useState<number>(-0.22985);
  const [lon, setLon] = useState<number>(-78.52495);
  const [dt, setDt] = useState<number>(0);

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div className="bg-slate-300 font-body">
        <div className="bg-slate-700">
          <div className="container mx-auto">
            <div className="flex items-center justify-between px-4 py-6">
              <div className="text-3xl font-bold text-white font-display">
                Weather App
              </div>
              <div className="flex gap-x-4">
                <a
                  href="https://www.linkedin.com/in/israelherrerae/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl text-white hover:text-slate-300" />
                </a>
                <a
                  href="https://github.com/saxoboy/weather-app-v2"
                  target="_blank"
                >
                  <FaGithub className="text-3xl text-white hover:text-slate-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-start gap-x-8">
            <CitysList
              nameCity={nameCity}
              setNameCity={setNameCity}
              lat={lat}
              setLat={setLat}
              lon={lon}
              setLon={setLon}
            />
            <main className="flex flex-col w-2/3 max-w-full py-6 gap-y-4">
              <div>
                <CityToday nameCity={nameCity} setDt={setDt} />
              </div>
              <div>
                <CityHowWill nameCity={nameCity} lat={lat} lon={lon} />
              </div>
              <div>
                <CityHowWas nameCity={nameCity} lat={lat} lon={lon} />
              </div>
            </main>
          </div>
        </div>
        <footer className="bg-slate-700">
          <div className="container mx-auto">
            <div className="flex justify-center py-6">
              <div className="text-white font-body">
                © 2023 Israel Herrera E.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </SWRConfig>
  );
}

export default App;
