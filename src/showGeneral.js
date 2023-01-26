import React, { Component } from "react";

export default class ShowGeneral extends Component {

  render(){
    const general = this.props.general
    // display data as expected
    return (
        <div className="general">
          <h3>Personal</h3>
          <p>{general.name}</p>
          <p>{general.email}</p>
          <p>{general.phone}</p>
          <p className="bio">{general.bio}</p>
          <button onClick = {this.props.onClick}>Edit</button>
        </div>
    )
  }
}