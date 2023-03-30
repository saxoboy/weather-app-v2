import useSWR from "swr";
import { CityTodayProps } from "../interfaces/inputs";
import { WeatherByNameCity } from "../interfaces/weatherByNameCity";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCityToday({ nameCity }: CityTodayProps) {
  const { data, error } = useSWR<WeatherByNameCity, Error>(
    `${import.meta.env.VITE_API_URL}/weather?q=${nameCity}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`,
    fetcher
  );

  return {
    cityToday: data,
    isLoading: !error && !data,
    isError: error,
  };
}
