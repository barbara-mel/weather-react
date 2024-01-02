import React, { useState } from "react";
import WeatherDate from "./WeatherDate.js";
import WeatherForecast from "./WeatherForecast.js";
import WeatherIcon from "./WeatherIcon.js";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Styles.css";
import WeatherTemperature from "./WeatherTemperature.js";

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
              <div className="col-xl-10">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control search-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-xl-2 pink-button">
                <input type="submit" className="btn w-100" value="Search" />
              </div>
            </div>
          </form>
        </div>

        <div className="container-weather">
          <div className="row justify-content-lg-center">
            <div className="col-lg-5  current-temperature">
              <div className="row-city">
                <h1 className="text-start-city">{weatherData.city}</h1>
              </div>

              <div className="row-temperature-image">
                <WeatherIcon
                  code={weatherData.icon}
                  size={160}
                  color={weatherData.icon}
                />
                <p className="weather-temperature-session">
                  <WeatherTemperature celsius={weatherData.temperature} />
                </p>
              </div>
              <div className="text-start">
                <div>
                  <span>
                    <WeatherDate date={weatherData.date} />{" "}
                  </span>
                </div>
                <div>
                  <span className="humidity">
                    Humidity: <span>{weatherData.humidity}</span>
                  </span>
                </div>
                <div>
                  <span className="current-description">
                    {weatherData.description}
                  </span>
                </div>
                <div>
                  <span className="wind-speed">
                    Wind Speed: {weatherData.wind}
                  </span>
                </div>
                <div>
                  <span className="pressure">
                    Pressure: {weatherData.pressure}
                  </span>
                </div>
              </div>
            </div>
            <WeatherForecast
              date={weatherData}
              coordinates={weatherData.coordinates}
            />
          </div>
        </div>
        <footer>
          <div className="container-footer fs-6 text fw-lighter fst-italic font-monospace">
            <span className="footer-1">
              <a
                href="https://github.com/barbara-mel/weather-app-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="open-source-info"
              >
                Open-source coded{" "}
              </a>
              By Barbara Melgaço.
            </span>{" "}
          </div>
        </footer>
      </div>
    );
  } else {
    showSearchPosition();
    return "Loading...";
  }
}
