import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative w-20 h-20 mb-4">
        <div className="absolute top-8 left-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-8 left-2 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="absolute top-8 left-8 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-8 left-14 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
      </div>
      <p className="text-gray-600 text-lg">Fetching weather data...</p>
    </div>
  )
}

export default LoadingSpinner
