import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import Citycomponent from "./Components/Citycomponent";
import WeatherinfoComponent from "./Components/WeatherinfoComponent";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};


function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (event) => {
    event.preventDefault();

    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfdd76bdfa7f4300a6f1de91bdc3cbc5`
    );

    setWeather(response.data);
    // console.log(orgData);
  };

  return (
    <div className="wrap">
      <div className="container">
        <h1 className="HeadingApp">Weather App</h1>
        {weather? (<WeatherinfoComponent weather = {weather}/>):
        (<Citycomponent setCity={setCity} fetchWeather={fetchWeather} />)}
      </div>
    </div>
  );
}

export default App;
