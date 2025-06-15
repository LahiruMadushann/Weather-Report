import axios from "axios";
import React from "react";

const SRI_LANKAN_LOCATIONS = {
  colombo: "Colombo,Sri Lanka",
  gampaha: "Gampaha,Sri Lanka",
  kalutara: "Kalutara,Sri Lanka",
  kandy: "Kandy,Sri Lanka",
  matale: "Matale,Sri Lanka",
  "nuwara eliya": "Nuwara Eliya,Sri Lanka",
  galle: "Galle,Sri Lanka",
  matara: "Matara,Sri Lanka",
  hambantota: "Hambantota,Sri Lanka",
  jaffna: "Jaffna,Sri Lanka",
  kilinochchi: "Kilinochchi,Sri Lanka",
  mannar: "Mannar,Sri Lanka",
  mullaitivu: "Mullaitivu,Sri Lanka",
  vavuniya: "Vavuniya,Sri Lanka",
  ampara: "Ampara,Sri Lanka",
  batticaloa: "Batticaloa,Sri Lanka",
  trincomalee: "Trincomalee,Sri Lanka",
  kurunegala: "Kurunegala,Sri Lanka",
  puttalam: "Puttalam,Sri Lanka",
  anuradhapura: "Anuradhapura,Sri Lanka",
  polonnaruwa: "Polonnaruwa,Sri Lanka",
  badulla: "Badulla,Sri Lanka",
  monaragala: "Monaragala,Sri Lanka",
  ratnapura: "Ratnapura,Sri Lanka",
  kegalle: "Kegalle,Sri Lanka",
  negombo: "Negombo,Sri Lanka",
  moratuwa: "Moratuwa,Sri Lanka",
  dehiwala: "Dehiwala,Sri Lanka",
  "mount lavinia": "Mount Lavinia,Sri Lanka",
  "sri jayawardenepura kotte": "Sri Jayawardenepura Kotte,Sri Lanka",
  kotte: "Sri Jayawardenepura Kotte,Sri Lanka",
  kalmunai: "Kalmunai,Sri Lanka",
  chilaw: "Chilaw,Sri Lanka",
  panadura: "Panadura,Sri Lanka",
  avissawella: "Avissawella,Sri Lanka",
  horana: "Horana,Sri Lanka",
  beruwala: "Beruwala,Sri Lanka",
  bentota: "Bentota,Sri Lanka",
  hikkaduwa: "Hikkaduwa,Sri Lanka",
  tangalle: "Tangalle,Sri Lanka",
  tissamaharama: "Tissamaharama,Sri Lanka",
  kataragama: "Kataragama,Sri Lanka",
  embilipitiya: "Embilipitiya,Sri Lanka",
  balangoda: "Balangoda,Sri Lanka",
  bandarawela: "Bandarawela,Sri Lanka",
  haputale: "Haputale,Sri Lanka",
  ella: "Ella,Sri Lanka",
  dambulla: "Dambulla,Sri Lanka",
  sigiriya: "Sigiriya,Sri Lanka",
  minneriya: "Minneriya,Sri Lanka",
  kalkudah: "Kalkudah,Sri Lanka",
  passikudah: "Passikudah,Sri Lanka",
  arugam: "Arugam Bay,Sri Lanka",
  "arugam bay": "Arugam Bay,Sri Lanka",
  valaichchenai: "Valaichchenai,Sri Lanka",
  point: "Point Pedro,Sri Lanka",
  "point pedro": "Point Pedro,Sri Lanka",
};

const fetchWeatherData = async (location) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;

  const normalizedLocation = location.toLowerCase().trim();

  const sriLankanLocation = SRI_LANKAN_LOCATIONS[normalizedLocation];

  if (!sriLankanLocation) {
    const availableCities = Object.keys(SRI_LANKAN_LOCATIONS).join(", ");
    throw new Error(
      `Location not supported. Available Sri Lankan cities: ${availableCities}`
    );
  }

  try {
    const response = await axios.get(`${API_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: sriLankanLocation,
        aqi: "yes",
      },
    });

    const weatherData = response.data;
    if (weatherData.location.country !== "Sri Lanka") {
      throw new Error("Invalid location: Not a Sri Lankan city");
    }

    return {
      location: {
        name: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        lat: weatherData.location.lat,
        lon: weatherData.location.lon,
        localtime: weatherData.location.localtime,
      },
      current: {
        temp_c: weatherData.current.temp_c,
        temp_f: weatherData.current.temp_f,
        condition: weatherData.current.condition,
        wind_mph: weatherData.current.wind_mph,
        wind_kph: weatherData.current.wind_kph,
        wind_dir: weatherData.current.wind_dir,
        pressure_mb: weatherData.current.pressure_mb,
        humidity: weatherData.current.humidity,
        cloud: weatherData.current.cloud,
        feelslike_c: weatherData.current.feelslike_c,
        feelslike_f: weatherData.current.feelslike_f,
        uv: weatherData.current.uv,
        vis_km: weatherData.current.vis_km,
      },
      air_quality: weatherData.current.air_quality || null,
      isValidSriLankanLocation: true,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    if (error.response) {
      const errorMsg =
        error.response.data?.error?.message || "Failed to fetch weather data";
      throw new Error(`WeatherAPI Error: ${errorMsg}`);
    }
    throw new Error(
      `Failed to fetch Sri Lankan weather data: ${error.message}`
    );
  }
};

export default fetchWeatherData;
