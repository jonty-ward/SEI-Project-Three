import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrentWeather from '../weather/CurrentWeather'
import WeekWeather from '../weather/WeekWeather'





const ParkWeather = (props) => {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState('current')

  const { longitude , latitude } = props
   


  useEffect(() => {

    const getData = async () =>{
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=c7b22e378e8404d1ac5d214062e5f766`)
      setWeather(data)
    }
    getData()
  },[])

  const handleWeather = (event) => {
    if ( event.target.value === 'current' ) setForecast('current')
    if ( event.target.value === 'week' ) setForecast('week')
  }

  const weatherForecastFunction = () =>{
    if (forecast === 'week'){
      return <WeekWeather
        weather = {weather}
      />
    }
  }
 

  if (!weather) return ''
 
  return (
    <div>

      <button value="current" onClick={handleWeather}>Current Weather</button>
      <button value="week" onClick={handleWeather}>week forecast</button>
      
      {forecast === 'current' ? 
        <CurrentWeather
          weather = {weather}
        />
        :
        weatherForecastFunction()
      }
    </div>

  )
}

export default ParkWeather 