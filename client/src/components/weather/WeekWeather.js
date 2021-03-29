/* eslint-disable indent */
import React from 'react'

const WeekWeather = ({ weather }) => {

  console.log('weekly forecast no map', weather.daily)




  
   return (

<div className="weatherContainer">

      <div className="day"> 

        { weather.daily.map((item, i)=>(


          <div className="weather-day" key={i}>
            <p>{ new Date(item.dt * 1000).toLocaleDateString() }</p>
            <p>Day:  { Math.round((item.temp.day - 273.15) * 10) / 10 } &deg;C, Feels like: { Math.round((item.feels_like.day - 273.15) * 10) / 10 } &deg;C  </p>
            <p>Evening: { Math.round((item.temp.eve - 273.15) * 10) / 10 } &deg;C, Feels like: { Math.round((item.feels_like.eve - 273.15) * 10) / 10 } &deg;C  </p>
            <p>Max: { Math.round((item.temp.max - 273.15) * 10) / 10 } &deg;C - Min: { Math.round((item.temp.min - 273.15) * 10) / 10 } &deg;C  </p>

            <p>Humidity: { item.humidity}%</p>
            <p>Weather: {item.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description}/>
            <p> Sunrise { new Date(item.sunrise * 1000).toLocaleTimeString() }</p>
            <p> Sunset { new Date(item.sunset * 1000).toLocaleTimeString() }</p>
          </div>
        ))} 

      </div>

  
</div>




  )
}

export default WeekWeather
