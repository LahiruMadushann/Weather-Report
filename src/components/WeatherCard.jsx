import React from 'react'

const WeatherCard = ({ title, value, unit, icon: Icon, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-white opacity-80" />
        <span className="text-white text-sm font-medium opacity-90">{title}</span>
      </div>
      <div className="text-white">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-xl ml-1 opacity-90">{unit}</span>
      </div>
    </div>
  )
}

export default WeatherCard
