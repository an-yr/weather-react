import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInf(props) {
  return (
    <div>
      <h2
        className="
          d-flex
          justify-content-md-end
          me-md-5
          pt-md-3 pt-5
          justify-content-center
        "
      >
        {props.data.city.toUpperCase()}
      </h2>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <FormattedDate date={props.data.date} />

        <div className="text-center me-md-4">
          <div className="temperature-number mt-4 mt-md-0">
            {props.data.temperature}&nbsp;
            <span className="degree-unity">
              <a href="https://github.com/">ºC</a> |
              <a href="https://github.com/">ºF</a>
            </span>
          </div>
          <p className="mt-4 mt-md-0 mb-1 text-capitalize">
            {props.data.description}
          </p>
          <p>Feels like: {props.data.feelsLike}º</p>
        </div>
      </div>
    </div>
  );
}
