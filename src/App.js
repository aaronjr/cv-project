import React, { Component } from "react";
import InfoForm from "./infoForm"
import EduForm from "./education"
import ShowEdu from "./showEdu"
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
      showGenInfoForm : true,
      showEduForm : true,
    };
  }

  handleSubmitInfo = (details) => {
    this.setState({
      general : {
      name : details.name,
      email : details.email,
      phone : details.phone 
      },
      showGenInfoForm : false
    })
  }

  handleSubmitEdu = (details) => {
    console.log(details)
    this.setState({
     education: [...this.state.education, details],
     showEduForm : false
    })
  }

  render() {
    const general = this.state.general
    const edu = this.state.education
    console.log(edu)
    const showGenInfoForm = this.state.showGenInfoForm
    const showEduForm = this.state.showEduForm

    return (
      <div>
        {showGenInfoForm ? 
          <InfoForm onSubmit = {this.handleSubmitInfo} details = {general}/> 
          : 
          <>
            <p>{general.name} {general.email} {general.phone} </p>
            <button onClick={() => this.setState({showGenInfoForm : true})}> Edit your information </button>
          </>
        }
        {showEduForm ?
          <EduForm onSubmit = {this.handleSubmitEdu} />
        :
        <>
          <ShowEdu education = {edu}/>
          <button onClick={() => this.setState({showEduForm : true})}> Add other schools</button>
        </>

        }
      </div>
    );
  }
}

export default App;
