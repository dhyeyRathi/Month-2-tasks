import React, { useEffect } from 'react'
import { useState } from 'react';

const Home = () => {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const api = import.meta.env.VITE_WEATHER_API_KEY;

    
        async function fetchdata(){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
        const res_json = await res.json();
        setData(res_json);
        }
        
        
  return (
    <div>
      <header className="w-full h-30 bg-gray-200 border-b-5">
        <nav className='w-full h-full flex justify-center items-center gap-20 min-w-20'>
            <input className='bg-white w-2/5 rounded text-2xl p-3 pl-6' placeholder='Enter City name..'
            value={city}
            onChange={(e) => setCity(e.target.value)}
             onKeyDown={(e) =>{
              if(e.key==="Enter"){
                fetchdata();
              }
             }}/>

            <button className='py-3 sm:px-3 w-1/10 bg-red-400 text-white font-bold text-l sm:text-2xl border-1 border-red-400 hover:bg-white hover:text-red-400'
            onClick={fetchdata}
           >Go! </button>
        </nav>
      </header>

        {data && 
      <div aria-label="data-container" className='w-auto h-auto py-20 px-10 mx-20 bg-yellow-200 text-xl sm:text-3xl flex flex-col gap-10 overflow-hidden'>
        <h1>City: {data.name}</h1>
        <h2>Temperature: {data.main.temp}</h2>
        <h3>Feels like: {data.main.feels_like}</h3>
        <h4>Weather: {data.weather[0].main} </h4>
        

      </div>}
    </div>
  )
}

export default Home
