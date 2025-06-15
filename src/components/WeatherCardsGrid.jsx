import React from "react";
import WeatherCard from "./WeatherCard";
import { Droplets, Eye, Sun, Wind } from "lucide-react";

const WeatherCardsGrid = ({ weatherData }) => {
  const { current } = weatherData;

  const weatherCards = [
    {
      title: "Humidity",
      value: current.humidity,
      unit: "%",
      icon: Droplets,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Wind Speed",
      value: current.wind_kph,
      unit: "km/h",
      icon: Wind,
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "UV Index",
      value: current.uv,
      unit: "",
      icon: Sun,
      gradient: "from-orange-500 to-orange-600",
    },
    {
      title: "Visibility",
      value: current.vis_km,
      unit: "km",
      icon: Eye,
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {weatherCards.map((card, index) => (
        <WeatherCard
          key={index}
          title={card.title}
          value={card.value}
          unit={card.unit}
          icon={card.icon}
          gradient={card.gradient}
        />
      ))}
    </div>
  );
};

export default WeatherCardsGrid;
