import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div
        className="
          d-flex
          text-center
          next-days
          mt-5 mt-md-0
          justify-content-center justify-content-md-start
        "
      >
        {forecast.map(function (day, idx) {
          if (idx < 5) {
            return <WeatherForecastDay data={day} key={idx} />;
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;

    let apiKey = `a30e7a3fdc9d7f347177df5b9d2e6526`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
