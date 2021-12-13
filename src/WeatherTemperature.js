import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(temp) {
    return Math.round((temp * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <span>
        <div className="temperature-number mt-4 mt-md-0">
          {props.celsius}
          <span className="degree-unity">
            {" "}
            ºC |{" "}
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </div>
        <p className="mt-4 mt-md-0 mb-1 text-capitalize">{props.description}</p>
        <p>Feels like: {props.feels_celsius}º</p>
      </span>
    );
  } else {
    return (
      <span>
        <div className="temperature-number mt-4 mt-md-0">
          {convertToFahrenheit(props.celsius)}
          <span className="degree-unity">
            <a href="/" onClick={showCelsius}>
              {" "}
              ºC{" "}
            </a>
            | ºF
          </span>
        </div>
        <p className="mt-4 mt-md-0 mb-1 text-capitalize">{props.description}</p>
        <p>Feels like: {convertToFahrenheit(props.feels_celsius)}º</p>
      </span>
    );
  }
}
