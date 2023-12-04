import React, { useState } from "react";
import axios from "axios";
import "./Styles.css";
import DateU from "./DateU.js";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  // API Call 

  function showSearchPosition() {
    let key = "c6f8ef4575250284954db9f4dfa7a996";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  
    axios.get(url).then(handleResponse);
  };

  // Handle Response

  function handleResponse(response){
    setWeatherData ({
    ready: true,
    coordinates: response.data.coord,
    description: response.data.weather[0].main,
    icon: response.data.weather[0].icon,
    precipitation: Math.round(response.data.main.pressure),
    temperature: Math.round(response.data.main.temp),
    date: new Date(response.data.dt * 1000),
    wind: Math.round(response.data.wind.speed) + "km/h",
    humidity: Math.round(response.data.main.humidity)+ "%",
    city: response.data.name,
    })};
  
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
        <div className="row">
          <div className="col-10">
            <form className="mb-3" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
          </div>
          <div className="col-2 pink-button">
            <button>
              <input
                type="submit"
                class="btn w-100"
                value="Search"
                
              />
            </button>
          </div>
        </div>
      </div>

      <div className="container-weather">
        <div className="row">
          <div className="col-5">
            <div className="row-city">
              <h1>{weatherData.city}</h1>
            </div>

            <div className="row-temperature-image">
              <img
                className="float-left main-temp-image"
                src=""
                alt="Clear"
                width="180"
                
              />
              <p>
                <span
                  className="temperature fw-bolder mb-3"
                  
                >
                </span
                ><small className="units"
                  >{weatherData.temperature}ºC </small>
              </p>
            </div>
            <div>
              <small>Last Update: <DateU /></small>
            </div>
            <div>
              <small className="humidity">Humidity: <span>{weatherData.humidity}%</span></small>
            </div>
            <div>
              <small className="current-description">{weatherData.description}</small>
            </div>
            <div>
              <small className="wind-speed">Wind Speed: {weatherData.wind}</small>
            </div>
            <div>
              <small className="pressure">Wind Speed: {weatherData.precipitation}</small>
            </div>
          </div>

          <div className="col-7" id="forecast">
            <div className="row">
              <div className="row next-temperature-days">
                <div className="col-4">
                  <img
                    className="float-left main-temp-image"
                    src="http://openweathermap.org/img/wn/50d@2x.png"
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
        </div>
      </div>
      <footer>
        <div
          className="container-footer fs-6 text fw-lighter fst-italic font-monospace"
        >
          <a
            href="https://github.com/barbara-mel/week6-lesson4.git"
            target="_blank"
            rel="noreferrer"
            className="open-source-info"
            >Open-source coded</a
          >
          By Barbara Melgaço
          <i className="fa-solid fa-temperature-three-quarters"></i>
        </div>
      </footer>
    </div>
    ); 
      } else {
        showSearchPosition();
          return "Loading...";
        }}
