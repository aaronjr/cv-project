import React from "react";

export const ShowGeneral = props => {
  const general = props.general
  // display data as expected
  return (
      <div className="general">
        <h3>Personal</h3>
        <p>{general.name}</p>
        <p>{general.email}</p>
        <p>{general.phone}</p>
        <p className="bio">{general.bio}</p>
        <button onClick = {props.onClick}>Edit</button>
      </div>
  )
}