import { createContext, useContext, useState } from "react";

// create types for city
type CityContextData = {
  city: string;
  setCity: (city: string) => void;
};

type CityProviderProps = {
  children: React.ReactNode;
};

// create context for city
const CityContext = createContext({
  city: "",
  setCity: (city: string) => {},
} as CityContextData);

// create provider for city
export const CityProvider = ({ children }: CityProviderProps) => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

// create hook for city
export const useCity = () => {
  return useContext(CityContext);
};

// Path: src/context/WeatherContext.tsx
// Compare this snippet from src/components/CityToday.tsx:
// import React from 'react'
//
// const CityToday = () => {
//   return (
//     <div className="p-4 mt-4 bg-slate-200">
//       <h3 className="pb-4 text-3xl font-display">Today's weather in {"name"}?</h3>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="p-2 text-center bg-slate-400">
//           <p className="text-lg">{"moment(dt * 1000).format(formato)"}</p>
//           <img
//             src={`https://openweathermap.org/img/wn/{weather[0].
//
