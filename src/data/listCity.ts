export interface City {
  id: number;
  value: string;
  label: string;
  lon: number;
  lat: number;
  timezone: string;
}

export const listCity: City[] = [
  {
    id: 1,
    value: "Quito, EC",
    label: "Quito",
    lon: -78.52,
    lat: -0.23,
    timezone: "America/Guayaquil",
  },
  {
    id: 2,
    value: "Buenos Aires, AR",
    label: "Buenos Aires",
    lon: -58.38,
    lat: -34.61,
    timezone: "America/Argentina/Buenos_Aires",
  },
  {
    id: 3,
    value: "London, GB",
    label: "Londres",
    lon: -0.13,
    lat: 51.51,
    timezone: "Europe/London",
  },
  {
    id: 4,
    value: "Chicago, US",
    label: "Chicago",
    lon: -87.65,
    lat: 41.85,
    timezone: "America/Chicago",
  },
  {
    id: 5,
    value: "Halifax, CA",
    label: "Halifax",
    lon: -63.57,
    lat: 44.65,
    timezone: "America/Halifax",
  },
  {
    id: 6,
    value: "Jerusalem, IL",
    label: "Jerusalem",
    lon: 35.22,
    lat: 31.77,
    timezone: "Asia/Jerusalem",
  },
  {
    id: 7,
    value: "Shanghai, CN",
    label: "Shanghai",
    lon: 121.46,
    lat: 31.22,
    timezone: "Asia/Shanghai",
  },
  {
    id: 8,
    value: "Paris, FR",
    label: "París",
    lon: 2.35,
    lat: 48.85,
    timezone: "Europe/Paris",
  },
  {
    id: 9,
    value: "Moscu, RO",
    label: "Moscu",
    lon: 27.93,
    lat: 45.9,
    timezone: "Europe/Moscow",
  },
  {
    id: 10,
    value: "Tokyo, JP",
    label: "Tokyo",
    lon: 139.69,
    lat: 35.69,
    timezone: "Asia/Tokyo",
  },
];
