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

  // const { data, error } = useSWR<WeatherDaysWas, Error>(
  //   `${
  //     import.meta.env.VITE_API_URL
  //   }/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${daysAgo[0]}&appid=${
  //     import.meta.env.VITE_API_KEY
  //   }&units=metric&exclude=minutely,hourly`,
  //   fetcher
  // );
  // dato = data ? [...dato, data] : [];
  // errors = error ? [...errors, error] : [];

  // const { data: data2, error: error2 } = useSWR<WeatherDaysWas, Error>(
  //   `${
  //     import.meta.env.VITE_API_URL
  //   }/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${daysAgo[1]}&appid=${
  //     import.meta.env.VITE_API_KEY
  //   }&units=metric&exclude=minutely,hourly`,
  //   fetcher
  // );
  // dato = data2 ? [...dato, data2] : [];
  // errors = error2 ? [...errors, error2] : [];

  // const { data: data3, error: error3 } = useSWR<WeatherDaysWas, Error>(
  //   `${
  //     import.meta.env.VITE_API_URL
  //   }/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${daysAgo[2]}&appid=${
  //     import.meta.env.VITE_API_KEY
  //   }&units=metric&exclude=minutely,hourly`,
  //   fetcher
  // );
  // dato = data3 ? [...dato, data3] : [];
  // errors = error3 ? [...errors, error3] : [];

  // const { data: data4, error: error4 } = useSWR<WeatherDaysWas, Error>(
  //   `${
  //     import.meta.env.VITE_API_URL
  //   }/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${daysAgo[3]}&appid=${
  //     import.meta.env.VITE_API_KEY
  //   }&units=metric&exclude=minutely,hourly`,
  //   fetcher
  // );
  // dato = data4 ? [...dato, data4] : [];
  // errors = error4 ? [...errors, error4] : [];

  // const { data: data5, error: error5 } = useSWR<WeatherDaysWas, Error>(
  //   `${
  //     import.meta.env.VITE_API_URL
  //   }/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${daysAgo[4]}&appid=${
  //     import.meta.env.VITE_API_KEY
  //   }&units=metric&exclude=minutely,hourly`,
  //   fetcher
  // );
  // dato = data5 ? [...dato, data5] : [];
  // errors = error5 ? [...errors, error5] : [];

  return {
    cityHowWass: dato,
    isLoading: !errors && !dato,
    isError: errors,
  };
};
