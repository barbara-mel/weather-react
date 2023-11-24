import React, { useState } from "react";
import axios from 'axios';
import "./Styles.css";

export default function Weather() {
  let weatherData = {
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function alertCity(event) {
    event.preventDefault();
    setMessage(`It is currently 20ºC in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="container-search-tab">
          <form id="search-form" className="mb-3" onSubmit={alertCity}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  onChange={updateCity}
                  placeholder="Enter a city.."
                  className="form-control search-input"
                  id="search-tab-input"
                />
              </div>
              <div className="col-2 pink-button">
                <button>
                  <input
                    type="submit"
                    className="btn w-100"
                    value="Search"
                    id="search-button"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="container-weather">
          <div className="row">
            <div className="col-5">
              <div className="row-city">
                <h1 id="city-1">{message}</h1>
              </div>

              <div className="row-temperature-image">
                <img
                  className="float-left main-temp-image"
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  width="100"
                  id="icon"
                />
                <p>
                  <span
                    className="temperature fw-bolder mb-3"
                    id="current-temperature"
                  >
                    {weatherData.temperature}
                  </span>
                  <small className="units">
                    <a href="#" id="celcius" className="active">
                      ºC
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit">
                      ºF
                    </a>
                  </small>
                </p>
              </div>
              <div>
                <small id="date-display">Last Update: {weatherData.date}</small>
              </div>
              <div>
                <small>
                  Humidity:{" "}
                  <span id="current-humidity">{weatherData.humidity}%</span>
                </small>
              </div>
              <div>
                <small id="current-description"></small>
              </div>
              <div>
                <small id="wind-speed">Wind Speed: {weatherData.wind} </small>
              </div>
            </div>

            <div className="col-7" id="forecast">
              <div className="row">
                <div className="row next-temperature-days">
                  <div className="col-4"></div>
                  <div className="col-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-footer fs-6 text fw-lighter fst-italic font-monospace">
            <a
              href="https://github.com/barbara-mel/week6-lesson4.git"
              target="_blank"
              id="open-source-link"
              className="open-source-info"
              rel="noreferrer"
            >
              Open-source coded
            </a>{" "}
            <span></span>
            By Barbara Melgaço
            <i className="fa-solid fa-temperature-three-quarters"></i>
          </div>
        </footer>
      </div>
    </div>
  );
}
