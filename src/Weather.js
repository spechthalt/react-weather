import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let unit = `imperial`;
    let apiKey = `aaa0469026a2f6fda71f9536102ca825`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(displayWeather);
  }

  function getWeather(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={getWeather}>
          <div className="row">
            <div className="col-12 col-sm-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control "
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100 d-none d-sm-inline"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
