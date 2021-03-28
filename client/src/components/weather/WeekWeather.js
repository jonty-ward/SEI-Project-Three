/* eslint-disable indent */
import React from 'react'

const WeekWeather = ({ weather }) => {

  console.log('weekly forecast no map', weather.daily)

  console.log('week forwcast weather mapped', weather.daily.map(daily =>{
    return daily.temp.max

  }))

const dayTemp = []
const maxTemp = []

 weather.daily.map(daily =>{
  dayTemp.push(daily.temp.day)
  maxTemp.push(daily.temp.max)
  })

  console.log('DAY TEMP . LENGTH ', )
    
 

  if (!dayTemp) return ''
   return (

    <div className="container-weather"> 
        <div className="app"> 

   { dayTemp.map((item, i)=>(
    <div key={i}>
      <p>Day {i}:  { Math.round((item - 273.15) * 10) / 10 } &deg;C </p>
    </div>
   ))} 

   { maxTemp.map((item, i)=>(
    <div key={i}>
      <p>Max {i}:  { Math.round((item - 273.15) * 10) / 10 } &deg;C </p>
    </div>
   ))} 
   </div> 

   </div>

  )
}

export default WeekWeather
