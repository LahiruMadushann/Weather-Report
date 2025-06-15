import React from "react";
import { MapPin, Calendar } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

const WeatherDisplay = ({ weatherData }) => {
  console.log("Weather Data in WeatherDisplay:", weatherData);

  const { location, current } = weatherData;
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <MapPin className="w-5 h-5 text-white mr-2" />
            <h2 className="text-2xl font-bold text-white">
              {location?.name}, {location?.country}
            </h2>
          </div>
          <div className="flex items-center justify-center md:justify-start text-blue-100 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{location?.localtime}</span>
          </div>
          <div className="text-6xl md:text-7xl font-bold text-white mb-2">
            {current?.temp_c}°
          </div>
          <p className="text-xl text-blue-100 mb-2">
            {current?.condition.text}
          </p>
          <p className="text-blue-200">Feels like {current?.feelslike_c}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <WeatherIcon
            condition={current?.condition?.text?.toLowerCase()}
            isDay={current?.is_day}
          />
          <p className="text-white text-sm mt-2 opacity-90">
            {current.is_day ? "Day" : "Night"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
