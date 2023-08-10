import { useState } from "react";


const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  console.log(weatherInfo)

  const kelvinToCelsius= (tempKelvin) => {
   return (tempKelvin - 273.15).toFixed(1)
  }
const KelvinToFahrenheit = (tempKelvin) => {
  return (( (tempKelvin- 273.15) * 9/5) + 32).toFixed(1)
}
  
const handeleChangeUnitTemp = () => {
setIsCelsius(!isCelsius)
}

const resultTempConversion = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) :
KelvinToFahrenheit(weatherInfo?.main.temp)





  return (
    <section className="text-center">
     <h2 className="text-3xl font-semibold text-gray-800 mb-4">
  {weatherInfo?.name}
</h2>

      
      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/* sección superior */}
        <section className="bg-white/60 p-2  rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2">{weatherInfo?.weather[0].description} </h4>
          <span className="text-4xl font-semibold text-gray-600 animate-pulse">
  {resultTempConversion}°{isCelsius ? "C" : "F"}
</span>


<img
  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
  alt="Weather Icon"
  className="animate-pulse shadow-md rounded-full bg-blue-200 p-2"
/>

        </section>

        {/* sección inferior */}
        <section>
        <section className="bg-white bg-opacity-60 p-4 py-6 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1 shadow-md">          
           <article className="flex gap-2 items-center" >
            <div className="w-[18px]">
              <img src={"/images/img1.png"} alt="" />
            </div>
            <span> {weatherInfo?.wind.speed}m/s </span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/img2.png"} alt="" />
            </div>
            <span> {weatherInfo?.main.humidity}% </span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/img3.png"} alt="" />
            </div>
            <span> {weatherInfo?.main.pressure}hPa </span>
          </article>

          </section>
        </section>
      </section>
      <button
  onClick={handeleChangeUnitTemp}
  className="px-6 py-3 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-200 transform hover:scale-105 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
>
  Toggle Temperature Unit
</button>

    </section>
  );
};
export default Weather;
