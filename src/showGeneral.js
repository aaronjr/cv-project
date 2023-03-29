import React from "react";

export const ShowGeneral = props => {
  const general = props.general
  // display data as expected
  return (
    <div className="holder general">
      <div className="Info">
        <h3>Personal</h3>
        <p>{general.name}</p>
        <p>{general.email}</p>
        <p>{general.phone}</p>
        <p className="bio">{general.bio}</p>
      </div>
      <div className="buttonHolder">
        <button onClick={props.onClick}>Edit</button>
      </div>
    </div>
  );
}