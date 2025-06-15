import { Cloud } from 'lucide-react'
import React from 'react'

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
      <div className="text-red-600 mb-4">
        <Cloud className="w-16 h-16 mx-auto mb-2 opacity-50" />
        <h3 className="text-lg font-semibold">Weather data unavailable</h3>
        <p className="text-sm mt-2">{message}</p>
      </div>
      <button 
        onClick={onRetry}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
      >
        Try Again
      </button>
    </div>
  )
}

export default ErrorMessage
