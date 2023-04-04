import useSWR from "swr";
import { CityHowWillProps } from "../interfaces/inputs";
import { WeatherSevenDays } from "../interfaces/weatherSevenDays";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCitysHowWil({ nameCity, lat, lon }: CityHowWillProps) {
  const { data, error } = useSWR<WeatherSevenDays, Error>(
    `${import.meta.env.VITE_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric&exclude=minutely,hourly`,
    fetcher
  );

  return {
    cityHowWill: data,
    isLoading: !error && !data,
    isError: error,
  };
}
