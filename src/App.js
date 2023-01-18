import React, { Component } from "react";
import InfoForm from "./infoForm"
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        email: '',
        phone: ''}
      ,
      education : [],
      experience : [],
    };
  }

  handleSubmit = (details) => {
    this.setState({
      general : {
      name : details.name,
      email : details.email,
      phone : details.phone }
    })
  }

  render() {
    const general = this.state.general

    return (
      <div>
        <InfoForm onSubmit = {this.handleSubmit}/>
        <p> {general.name} {general.email} {general.phone}  </p>
      </div>
    );
  }
}

export default App;
