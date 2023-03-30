import { listCity } from "../data/listCity";

interface CitysListProps {
  nameCity: string;
  setNameCity: (nameCity: string) => void;
  lat: number;
  setLat: (lat: number) => void;
  lon: number;
  setLon: (lon: number) => void;
}

const CitysList = ({
  nameCity,
  setNameCity,
  lat,
  setLat,
  lon,
  setLon,
}: CitysListProps) => {
  const handleCity = (city: string, lat: number, lon: number) => {
    setNameCity(city);
    setLat(lat);
    setLon(lon);
  };

  return (
    <aside className="flex flex-col w-1/3 py-6 max-w-[250px]">
      <h3 className="px-4 text-xl font-display">Available Cities</h3>
      <hr className=" border-slate-900" />
      <div className="flex items-center">
        <ul className="w-full">
          {listCity.map((city) => (
            <li
              key={city.id}
              className={`hover:bg-slate-200 ${
                nameCity === city.value ? "bg-slate-200" : ""
              }`}
            >
              <a
                className="block p-4 cursor-pointer"
                onClick={() => handleCity(city.value, city.lat, city.lon)}
              >
                {city.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CitysList;
