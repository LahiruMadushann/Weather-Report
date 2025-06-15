import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcon from './components/WeatherIcon';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherCard from './components/WeatherCard';
import WeatherCardsGrid from './components/WeatherCardsGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import fetchWeatherData from './services/fetchWeatherData';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Colombo');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
        console.log('Weather Data:', data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchData();
  }, [location]);

  return (
    <div className='min-h-screen bg-blue-400'>
      <div>
        <Header />
      </div>
      <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8'>
        <SearchBar onSearch={setLocation} />
      </div>
      <div>
        {weatherData && (
          <WeatherDisplay weatherData={weatherData} />
        )}
      </div>
      <div>
        {weatherData && (
          <WeatherCardsGrid weatherData={weatherData} />
        )}
      </div>
      <div>
        <LoadingSpinner />
      </div>
      <div>
        <ErrorMessage error={error} onRetry={() => setLocation(location)} />
      </div>
    <div className="flex items-center justify-center">
      <WeatherIcon condition={weatherData?.current?.condition?.text} isDay={weatherData?.current?.is_day} />
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
