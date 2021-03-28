import React from 'react'

const CurrentWeather = ( { weather } ) => {



  return (
    <div>
      <>
        <p> Temperature: {Math.round((weather.current.temp - 273.15) * 10) / 10} &deg;C  </p>
        <p>Humidity: {weather.current.humidity} % </p>
        <p> Weather: {weather.current.weather[0].main} </p>
        <p> Weather description: {weather.current.weather[0].description} </p>
        <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt={weather.current.weather[0].description}/>
      </>
    </div>
  )
}

export default CurrentWeather
