import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="row next-temperature-days">
      <div className="col-4">
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={32}
          color={props.data.weather[0].icon}
        />
      </div>
      <div className="col-8">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()} °C
        </span>{" "}
        |
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()} °C
        </span>
        <div className="forecast-time">{day()}</div>
      </div>
    </div>
  );
}
