import React from "react";

export default function Message(props) {
  let hour = props.date.getHours();

  if (hour >= 0 && hour < 18) {
    return (
      <h1 className="d-none d-sm-block pb-4 pt-4">
        Have a
        <br />
        good day !
      </h1>
    );
  } else {
    return (
      <h1 className="d-none d-sm-block pb-4 pt-4">
        Have a
        <br />
        nice evening !
      </h1>
    );
  }
}
