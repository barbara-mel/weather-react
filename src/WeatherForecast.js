import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiKey = "1266ad07b66517497b1acf79ea5a6a64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="col-7 Weather-forecast" id="forecast">
        <div className="row">
          <div className="row next-temperature-days">
            <div className="col-4">
              <WeatherIcon code={"01d"} size={52} color="01d" />
            </div>
            <div className="col-8">
              <span className="WeatherForecast-temperature-max">
                {forecastData[0].temp.max}°C
              </span>{" "}
              |
              <span className="WeatherForecast-temperature-min">
                {" "}
                {forecastData[0].temp.min}°C
              </span>
              <div className="forecast-time">Monday, 07/31</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
