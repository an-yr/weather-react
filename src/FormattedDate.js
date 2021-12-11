import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = props.date.getDate();
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div className="date ms-md-3">
      <p className="mb-1 mt-5 mt-md-4">
        {hour}:{minute}
      </p>
      <p className="mb-1">{day}</p>
      <p className="mb-1">
        {month}, {today}
      </p>
    </div>
  );
}
