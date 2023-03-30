import React from 'react'

const CityHowWill = () => {
  return (
    <div className="p-4 mt-4 bg-slate-200">
    <h3 className="pb-4 text-3xl font-display">How will the weather be in {"name"}?</h3>    
      <div className="grid grid-cols-4 gap-4">
        {/* {daily.map((dia) => ( */}
          <div key={"dia.dt"} className="p-2 text-center bg-slate-400">    
            <p className="text-lg">{"moment(dia.dt * 1000).format(formato)"}</p>
            <img
              src={`https://openweathermap.org/img/wn/{dia.weather[0].icon}@2x.png`}
              alt={"dia.weather[0].main"}
              className="block mx-auto"
            />    
            <p className="text-lg">{"dia.weather[0].main"} - {"dia.weather[0].description"}</p>
            <p className="text-2xl">{"parseFloat(dia.temp.day).toFixed(0)"} <span>&#x2103;</span></p>
            </div>  
        {/* ))} */}
      </div>
    </div>
  )
}

export default CityHowWill