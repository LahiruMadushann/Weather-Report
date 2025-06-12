import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Colombo');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`${API_URL}/current.json`, {
          params: {
            key: API_KEY,
            q: location,
            aqi: 'no'
          }
        });
        setWeatherData(response.data);

        console.log('Weather Data:', response.data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, [API_KEY, API_URL, location]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold underline mt-14">Hello Weather App</h1>
    </div>
  );
}

export default App;
