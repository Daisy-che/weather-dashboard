import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css'

const Homepage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '76f554310844452797b54548242606';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`

      );
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <div className='response'>
    <div className='with'>
    
    <div className="weather-dashboard">
      
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>search</button>

      {error && <div className="error">{error}</div>}

      {weather && (
        <div className="weather-info">
           <h2>{weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Description: {weather.current.condition.text}</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
        </div>
        
      )}
     
    </div>
    <div className='weather'>
        <img src='/images/weather focast.png'/>
      </div>
      <div className='humidity'>
        <div className='rain'>
          <img src='/images/rainfalls.png'/>
        </div>
        <div className='hum'>
          <img src='/images/rainfal.png'/>
        </div>
      </div>
   
    </div>
    </div>
  
    
 
    
    
  );
};

export default Homepage;