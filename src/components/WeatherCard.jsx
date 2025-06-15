import React from 'react'

const WeatherCard = ({ title, value, unit, icon: Icon, gradient }) => {
  return (
    <div>
      <div>
       
        <span>{title}</span>
      </div>
      <div>
        <span>{value}</span>
        <span>{unit}</span>
      </div>
    </div>
  )
}

export default WeatherCard
