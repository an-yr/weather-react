import React from "react";
import WeatherIcon from "react-icons-weather";

export default function WeatherForecastDay(props) {
  function date() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[day].toUpperCase();
  }
  function icon() {
    return props.data.weather[0].id.toString();
  }
  function max() {
    return Math.round(props.data.temp.max);
  }
  function min() {
    return Math.round(props.data.temp.min);
  }
  return (
    <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
      <p>{date()}</p>
      <div className="p-3">
        <WeatherIcon name="owm" iconId={icon()} />
      </div>
      <p>
        {min()}º / {max()}º
      </p>
    </div>
  );
}
