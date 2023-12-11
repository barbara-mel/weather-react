import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";

export default function WeatherForecast() {
  return (
    <div className="col-7" id="forecast">
      <div className="row">
        <div className="row next-temperature-days">
          <div className="col-4">
            <img
              className="float-left main-temp-image"
              src=""
              alt="temperature-icon"
              width="50"
            />
          </div>
          <div className="col-8">
            <span className="weather-forecast-temperature-max">30°C</span> |
            <span className="weather-forecast-temperature-min">25°C</span>
            <div className="forecast-time">Monday, 07/31</div>
          </div>
        </div>
      </div>
    </div>
  );
}
