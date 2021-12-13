import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.list[0].name,
      date: new Date(),
      description: response.data.list[0].weather[0].description,
      feelsLike: Math.round(response.data.list[0].main.feels_like),
      temperature: Math.round(response.data.list[0].main.temp),
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div
          className={
            hour >= 0 && hour < 18
              ? "background-day py-2 px-5"
              : "background-night color-night py-2 px-5"
          }
        >
          <nav className="d-flex justify-content-center justify-content-md-end">
            <form onSubmit={handleSubmit}>
              <input
                className={
                  hour >= 0 && hour < 18 ? "background-day" : "background-night"
                }
                type="search"
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
              >
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </nav>
          <Message date={weatherData.date} />
        </div>
        <div className="black-background px-2 px-md-4">
          <WeatherInfo data={weatherData} />
          <div
            className="
          d-flex
          text-center
          next-days
          mt-5 mt-md-0
          justify-content-center justify-content-md-start
        "
          >
            <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
              <p>MON</p>
              <i className="fas fa-sun p-3"></i>
              <p>24 / 34</p>
            </div>
            <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
              <p>TUE</p>
              <i className="fas fa-sun p-3"></i>
              <p>24 / 34</p>
            </div>
            <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
              <p>WED</p>
              <i className="fas fa-sun p-3"></i>
              <p>24 / 34</p>
            </div>
            <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
              <p>THU</p>
              <i className="fas fa-sun p-3"></i>
              <p>24 / 34</p>
            </div>
            <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
              <p>FRI</p>
              <i className="fas fa-sun p-3"></i>
              <p>24 / 34</p>
            </div>
          </div>
          <footer>
            <p className="github-link text-center mt-5 mt-md-2 mt-lg-0 pb-5 pb-lg-3 mb-0">
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
