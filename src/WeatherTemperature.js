import React from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{props.fahrenheit}</span>
      <span className="unit">°F</span>
    </span>
  );
}
