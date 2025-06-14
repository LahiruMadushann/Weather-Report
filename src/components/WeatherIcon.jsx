import React from 'react';
import {Droplets, Wind, Sun, Eye, Cloud , CloudRain, Zap} from 'lucide-react';

const WeatherIcon = ({condition, isDay}) => {
    const iconClass = "w-16 h-16 text-white drop-shadow-lg";

    if (condition === 'Sunny') {
        return isDay ? <Sun className={iconClass} /> : <Cloud className={iconClass} />;
    } else if (condition === 'Patchy rain possible' || condition === 'Patchy light rain' || condition === 'Light rain') {
        return <Droplets className={iconClass} />;
    } else if (condition === 'Partly cloudy') {
        return <Cloud className={iconClass} />;
    } else if (condition === 'Moderate rain' || condition === 'Moderate rain at times' || condition === 'Heavy rain' || condition === 'Heavy rain at times' || condition === 'Light freezing rain') {
        return <CloudRain className={iconClass} />;
    } else if (condition === 'Fog' || condition === 'Freezing fog') {
        return <Eye className={iconClass} />;
    } else if (condition === 'Windy' || condition === 'Blizzard') {
        return <Wind className={iconClass} />;
    } else if (condition === 'Patchy light drizzle' || condition === 'Light drizzle' || condition === 'Light sleet') {
        return <Zap className={iconClass} />;
    }

    return <Sun className={iconClass} />;
}

export default WeatherIcon
