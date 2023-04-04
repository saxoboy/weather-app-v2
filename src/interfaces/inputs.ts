export interface CityTodayProps {
  nameCity: string;
  setDt: React.Dispatch<React.SetStateAction<number>>;
}

export interface CityHowWillProps {
  nameCity: string;
  lat: number;
  lon: number;
}

export interface CityHowWassProps {
  nameCity?: string;
  lat: number;
  lon: number;
}
