import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const codeMappingColor = {
    "01d": "#FDD14F",
    "01n": "#FDD14F",
    "02d": "#9ba6a5",
    "02n": "#9ba6a5",
    "03d": "#9ba6a5",
    "03n": "#9ba6a5",
    "04d": "#9ba6a5",
    "04n": "#9ba6a5",
    "09d": "#393e46",
    "09n": "#393e46",
    "10d": "#393e46",
    "10n": "#393e46",
    "11d": "#393e46",
    "11n": "#393e46",
    "13d": "#79c2d0",
    "13n": "#79c2d0",
    "50d": "#9ba6a5",
    "50n": "#9ba6a5",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={codeMappingColor[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
