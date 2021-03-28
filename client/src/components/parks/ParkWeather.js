import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrentWeather from '../weather/CurrentWeather'





const ParkWeather = (props) => {

  const [weather, setWeather] = useState(null)
  console.log(setWeather, weather)


  const { longitude , latitude } = props

  // console.log('LONGITUDE>>>>', longitude)
  // console.log('LATITUDE>>>>', latitude)


  useEffect(() => {

    const getData = async () =>{
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=c7b22e378e8404d1ac5d214062e5f766`)
      setWeather(data)
    }
    getData()
  },[])
 

  if (!weather) return ''


  console.log('WEATHER ====>>>>>', weather)
  return (
    <CurrentWeather

      weather = {weather}
    />
  )
}

export default ParkWeather 