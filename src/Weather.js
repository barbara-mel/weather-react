import React, { useState } from "react";
import WeatherDate from "./WeatherDate.js";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Styles.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  // Handle Response

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      pressure: Math.round(response.data.main.pressure),
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed) + "km/h",
      humidity: Math.round(response.data.main.humidity) + "%",
      city: response.data.name,
    });
  }

  // API Call

  function showSearchPosition() {
    let key = "c6f8ef4575250284954db9f4dfa7a996";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    showSearchPosition();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="container-search-tab">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control search-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2 pink-button">
                <input type="submit" className="btn w-100" value="Search" />
              </div>
            </div>
          </form>
        </div>

        <div className="container-weather">
          <div className="row">
            <div className="col-5">
              <div className="row-city">
                <h1 className="text-start">{weatherData.city}</h1>
              </div>

              <div className="row-temperature-image">
                <img
                  className="float-left main-temp-image"
                  src={weatherData.iconUrl}
                  alt="Clear"
                  width="180"
                />
                <p>
                  <span className="temperature fw-bolder mb-3">
                    {weatherData.temperature}
                  </span>
                  <small className="units"> ºC | </small>{" "}
                  <small className="units"> ºF </small>
                </p>
              </div>
              <div className="text-start">
                <div>
                  <small>
                    <WeatherDate date={props.data.date} />{" "}
                  </small>
                </div>
                <div>
                  <small className="humidity">
                    Humidity: <span>{weatherData.humidity}</span>
                  </small>
                </div>
                <div>
                  <small className="current-description">
                    With {weatherData.description}
                  </small>
                </div>
                <div>
                  <small className="wind-speed">
                    Wind Speed: {weatherData.wind}
                  </small>
                </div>
                <div>
                  <small className="pressure">
                    Pressure: {weatherData.pressure}
                  </small>
                </div>
              </div>
            </div>

            <div className="col-7" id="forecast">
              <div className="row">
                <div className="row next-temperature-days">
                  <div className="col-4">
                    <img
                      className="float-left main-temp-image"
                      src={weatherData.iconUrl}
                      alt="temperature-icon"
                      width="50"
                    />
                  </div>
                  <div className="col-8">
                    <span className="weather-forecast-temperature-max">
                      30°C
                    </span>{" "}
                    |
                    <span className="weather-forecast-temperature-min">
                      25°C
                    </span>
                    <div className="forecast-time">Monday, 07/31</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-footer fs-6 text fw-lighter fst-italic font-monospace text-start">
            <a
              href="https://github.com/barbara-mel/weather-app-project.git"
              target="_blank"
              rel="noopener noreferrer"
              className="open-source-info"
            >
              Open-source coded{" "}
            </a>
            By Barbara Melgaço. Let's{" "}
            <a
              href="https://www.linkedin.com/in/barbaramelgaco1/"
              target="_blank"
              rel="noopener noreferrer"
              className="open-source-info"
            >
              Connect!
            </a>
            <i className="fa-solid fa-temperature-three-quarters"></i>
          </div>
        </footer>
      </div>
    );
  } else {
    showSearchPosition();
    return "Loading...";
  }
}
