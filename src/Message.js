import React from "react";

export default function Message(props) {
  if (props.hour >= 0 && props.hour < 18) {
    return (
      <h1 className="d-none d-sm-block">
        Have a
        <br />
        good day !
      </h1>
    );
  } else {
    return (
      <h1 className="d-none d-sm-block">
        Have a
        <br />
        good night !
      </h1>
    );
  }
}
