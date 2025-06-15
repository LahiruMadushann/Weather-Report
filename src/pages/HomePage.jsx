import React from 'react'
import fetchWeatherData from '../services/fetchWeatherData';

const HomePage = () => {
const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('Colombo, Sri Lanka');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(currentLocation);
        setWeatherData(data);
        console.log('Weather Data:', data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchData();
  }, [location]);

  return (
    <div>
      
    </div>
  )
}

export default HomePage
