import React, { Component } from "react";
import './index.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      general: [ 
        {name: 'Aaron'},
        {email: '@'},
        {phone: '0'}
      ],
      education : [],
      experience : [],
    };
  }

  render() {
    const general = this.state.general[0].name

    return (
      <div>
        <p>{general}</p>
      </div>
    );
  }
}

export default App;
