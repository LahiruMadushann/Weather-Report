import React, { useEffect, useState } from 'react'
import fetchWeatherData from '../services/fetchWeatherData';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import WeatherDisplay from '../components/WeatherDisplay';
import WeatherCardsGrid from '../components/WeatherCardsGrid';
import Footer from '../components/Footer';

const HomePage = () => {
const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('colombo');

  const handleFetchWeather = async (location = 'colombo') => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      setCurrentLocation(location);
    } catch (err) {
      setError('Failed to fetch weather data. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchWeather();
  }, [location]);

  const handleSearch = (location) => {
    if (location.trim()) {
      handleFetchWeather(location.trim());
    }
  };

  const handleRetry = () => {
    handleFetchWeather(currentLocation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl mx-auto">
            <LoadingSpinner />
          </div>
        )}
        
        {error && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl mx-auto">
            <ErrorMessage message={error} onRetry={handleRetry} />
          </div>
        )}
        
        {!loading && !error && weatherData && (
          <>
            <WeatherDisplay weatherData={weatherData} />
            <WeatherCardsGrid weatherData={weatherData} />
          </>
        )}
        
        <Footer />
      </div>
    </div>
  );
}

export default HomePage
