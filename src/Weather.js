import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a City" />
        <input className="btn btn-primary" type="submit" value="Search" />
      </form>
      <h1>NewYork</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="mostly cloudy"
          />
          5°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 72%</li>
            <li>Humidity: 15%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
