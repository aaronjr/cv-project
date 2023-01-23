import React, { Component } from "react";

export default class ShowGeneral extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const general = this.props.general

    return (
        <>
          <h3>About me</h3>
          <p>Name: {general.name}</p>
          <p>Email: {general.email}</p>
          <p>Phone: {general.phone}</p>
          <p>About me: {general.bio}</p>
        </>
    )
  }
}