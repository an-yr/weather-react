import React from "react";
import WeatherIcon from "react-icons-weather";

export default function WeatherForecast(props) {
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
      <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
        <p>MON</p>
        <div className="p-3">
          <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <p>24 / 34</p>
      </div>
      <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
        <p>TUE</p>
        <div className="p-3">
          <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <p>24 / 34</p>
      </div>
      <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
        <p>WED</p>
        <div className="p-3">
          <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <p>24 / 34</p>
      </div>
      <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
        <p>THU</p>
        <div className="p-3">
          <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <p>24 / 34</p>
      </div>
      <div className="day-square px-lg-4 py-lg-2 px-1 py-4 py-md-2 m-lg-2 m-1">
        <p>FRI</p>
        <div className="p-3">
          <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <p>24 / 34</p>
      </div>
    </div>
  );
}
