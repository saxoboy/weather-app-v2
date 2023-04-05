import useSWR from "swr";
import { CityHowWassProps } from "../interfaces/inputs";
import { Weather, WeatherDaysWas } from "../interfaces/weatherDaysWas";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const today = new Date();
const daysAgo = Array.from({ length: 5 }, (_, i) => {
  const date = new Date();
  date.setDate(today.getDate() - i - 1);
  return Math.floor(date.getTime() / 1000);
});

export const useCityHowWas = ({ lat, lon }: CityHowWassProps) => {
  let dato: {
    dt: number | undefined;
    weather: Weather[] | undefined;
    temp: number | undefined;
  }[] = [];
  let errors: any[] = [];

  daysAgo.forEach(async (day) => {
    const { data, error } = useSWR<WeatherDaysWas, Error>(
      `${
        import.meta.env.VITE_API_URL
      }/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${day}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric&exclude=minutely,hourly`,
      fetcher
    );
    const { dt, weather, temp } = data?.current || {};

    const algo = {
      dt,
      weather,
      temp,
    };
    dato: dato = data ? [...dato, algo] : [];
    errors = error ? [...errors, error] : [];
  });
  
  return {
    cityHowWass: dato,
    isLoading: !errors && !dato,
    isError: errors,
  };
};
