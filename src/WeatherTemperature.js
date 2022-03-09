import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  return (
    <span className="WeatherTemperature">
      <span className="temperature">{props.fahrenheit}</span>
      <span className="unit">°F</span>
    </span>
  );
}
