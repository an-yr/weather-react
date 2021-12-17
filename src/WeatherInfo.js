import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2
        className="
          d-flex
          justify-content-md-end
          me-md-5
          pt-5
          justify-content-center
        "
      >
        {props.data.city.toUpperCase()}
      </h2>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <FormattedDate date={props.data.date} />

        <div className="text-center me-md-4">
          <WeatherTemperature
            celsius={props.data.temperature}
            description={props.data.description}
            feels_celsius={props.data.feelsLike}
          />
        </div>
      </div>
    </div>
  );
}
