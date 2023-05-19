import React from "react";
import "../App.css";

const Citycomponent = (props) => {
  const {setCity, fetchWeather} = props;
  return (
    <div>
      <img src="/icons/perfect-day.svg" alt="Cloud-iamge" className="imgLogo" />
      <h2 className="citylabel"> Find Weather of your city</h2>
      <form className="searchbox" onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter your city name....."
          className="inputbox"
        onChange={(event) => setCity(event.target.value)}></input>
        <button type="submit" className="searchbutton">Search</button>
      </form>
    </div>
  );
};

export default Citycomponent;
