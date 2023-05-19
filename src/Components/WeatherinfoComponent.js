import React from "react";
import { WeatherIcons } from "../App";

export const WeatherInfoIcons = {
  Sunset: "/icons/temp.svg",
  Sunrise: "/icons/temp.svg",
  Humidity: "/icons/humidity.svg",
  Wind: "/icons/wind.svg",
  Pressure: "/icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div className="InfoContainer">
      <img className="infoIcon" src={WeatherInfoIcons[name]} alt="icons"></img>
      <span className="infoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

const WeatherinfoComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  console.log(isDay);
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  const time = getTime();
  console.log(time);



  return (
    <div>
      <div className="weatherCondition">
      <span className="condition">
        <span>{`${Math.floor(weather?.main?.temp - 273)}°C`} </span>
        {` | ${weather?.weather[0].description}`}
      </span>
      <img
        src={WeatherIcons[weather?.weather[0].icon]}
        className="WeatherIcons"
        alt="icons"
      />
    </div>
    <span className="Location">
      {weather?.name}, {weather?.sys?.country}
    </span>
    <span className="WeatherInfoLabel">Weather Info</span>
    <div className="weatherInfoContainer">
      <WeatherInfoComponent
        name={isDay ? "Sunset" : "Sunrise"}
        value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
      />
      <WeatherInfoComponent
        name={"Humidity"}
        value={weather?.main?.humidity}
      />
      <WeatherInfoComponent name={"Wind"} value={weather?.wind?.speed} />
      <WeatherInfoComponent
        name={"Pressure"}
        value={weather?.main?.pressure}
      />
    </div>
       
    </div>
  );
};

export default WeatherinfoComponent;
