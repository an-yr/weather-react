import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].id,
      temperature: Math.round(response.data.main.temp),
    });
  }
  let hour = new Date().getHours();

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = `a30e7a3fdc9d7f347177df5b9d2e6526`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showCurrentTemp(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiKey = `a30e7a3fdc9d7f347177df5b9d2e6526`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentTemp);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div
          className={
            hour >= 0 && hour < 18
              ? "background-day py-2 px-5 pt-4 pt-sm-3"
              : "background-night color-night py-2 px-5 pt-4 pt-sm-3"
          }
        >
          <nav className="d-flex justify-content-center justify-content-md-end pt-4">
            <form onSubmit={handleSubmit}>
              <input
                className={
                  hour >= 0 && hour < 18
                    ? "background-day px-2"
                    : "background-night px-2"
                }
                type="search"
                placeholder="Type a city..."
                onChange={handleCityChange}
              />
              <button
                className={
                  hour >= 0 && hour < 18
                    ? "background-day mx-2"
                    : "background-night mx-2"
                }
                type="submit"
              >
                <i className="fas fa-search"></i>
              </button>
              <button
                className={
                  hour >= 0 && hour < 18 ? "background-day" : "background-night"
                }
                onClick={showCurrentLocation}
              >
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </nav>
          <Message date={weatherData.date} />
        </div>
        <div className="black-background px-2 px-md-4">
          <WeatherInfo data={weatherData} />
          <WeatherForecast
            icon={weatherData.icon}
            coord={weatherData.coordinates}
          />
          <footer>
            <p className="github-link text-center mt-5 mt-md-2 mt-lg-0 pb-5 pb-lg-4 mb-0">
              This page was coded by Angela Yuri and is&nbsp;
              <a
                href="https://github.com/an-yr/weather-react"
                rel="noreferrer"
                target="_blank"
              >
                open-source
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    );
  } else {
    search();

    return <h1>Loading</h1>;
  }
}
