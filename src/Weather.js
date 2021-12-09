import React from "react";
import Message from "./Message";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Rio de Janeiro",
    temperature: 19,
    weekDay: "Sunday",
    date: "November, 11",
    description: "Cloudy",
    feels: 21,
  };
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

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
          <input
            className={
              hour >= 0 && hour < 18 ? "background-day" : "background-night"
            }
            type="text"
          />
          <button
            className={
              hour >= 0 && hour < 18
                ? "background-day mx-2"
                : "background-night mx-2"
            }
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
        </nav>
        <Message hour={hour} />
      </div>
      <div className="black-background px-2 px-md-4">
        <h2
          className="
          d-flex
          justify-content-md-end
          me-md-5
          pt-md-3 pt-5
          justify-content-center
        "
        >
          {weatherData.city.toUpperCase()}
        </h2>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="date ms-md-3">
            <p class="mb-1 mt-5 mt-md-4">
              {hour}:{minute}
            </p>
            <p class="mb-1">{weatherData.weekDay}</p>
            <p class="mb-1">{weatherData.date}</p>
          </div>
          <div class="text-center me-md-3">
            <div class="temperature-number mt-4 mt-md-0">
              {weatherData.temperature}
              <span class="degree-unity">
                <a href="https://github.com/">ºC</a> |
                <a href="https://github.com/">ºF</a>
              </span>
            </div>
            <p class="mt-4 mt-md-0 mb-1">{weatherData.description}</p>
            <p class="">Feels like: {weatherData.feels}º</p>
          </div>
        </div>
        <div
          class="
          d-flex
          text-center
          next-days
          mt-5 mt-md-0
          justify-content-center justify-content-md-start
        "
        >
          <div class="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
            <p>MON</p>
            <i class="fas fa-sun p-3"></i>
            <p>24 / 34</p>
          </div>
          <div class="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
            <p>TUE</p>
            <i class="fas fa-sun p-3"></i>
            <p>24 / 34</p>
          </div>
          <div class="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
            <p>WED</p>
            <i class="fas fa-sun p-3"></i>
            <p>24 / 34</p>
          </div>
          <div class="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
            <p>THU</p>
            <i class="fas fa-sun p-3"></i>
            <p>24 / 34</p>
          </div>
          <div class="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
            <p>FRI</p>
            <i class="fas fa-sun p-3"></i>
            <p>24 / 34</p>
          </div>
        </div>
        <footer>
          <p class="text-center mt-5 mt-md-2 mt-lg-0 pb-5 pb-lg-3 mb-0">
            This page was coded by Angela Yuri and is
            <a href="https://github.com/"> open-source</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}
