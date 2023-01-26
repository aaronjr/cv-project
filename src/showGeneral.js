import React, { Component } from "react";

export default class ShowGeneral extends Component {

  render(){
    const general = this.props.general
    // display data as expected
    return (
        <div className="general">
          <p>Name: {general.name}</p>
          <p>Email: {general.email}</p>
          <p>Contact number: {general.phone}</p>
          <p className="pbioheader">Personal bio: </p>
          <p className="bio">{general.bio}</p>
          <button onClick = {this.props.onClick}>Edit</button>
        </div>
    )
  }
}