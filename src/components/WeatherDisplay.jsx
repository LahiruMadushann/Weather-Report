import React from 'react'

const WeatherDisplay = ({ weatherData }) => {
    const { location, current } = weatherData;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
      <p className="text-lg">{current.condition.text}</p>
      <p className="text-4xl font-bold">{current.temp_c}°C</p>
    </div>
  )
}

export default WeatherDisplay
