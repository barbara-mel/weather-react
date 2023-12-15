import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature fw-bolder mb-3">
          {Math.round(props.celsius)}
        </span>
        <small className="units">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ºF
          </a>{" "}
        </small>{" "}
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span className="WeatherTemperature">
        <span className="temperature fw-bolder mb-3">
          {Math.round(fahrenheit)}
        </span>
        <small className="units">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            ºC
          </a>{" "}
          | ºF{" "}
        </small>{" "}
      </span>
    );
  }
}
