import React, { Component } from "react";
import InfoForm from "./infoForm"
import EduForm from "./eduForm"
import ShowEdu from "./showEdu"
import ExpForm from "./expForm"
import SkillForm from "./skillForm"
import './index.css';
import All from "./All"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        email: '',
        phone: '',
        bio: '',
      }
      ,
      education : [],
      experience : [],
      skills : [],
      slide: 0
    };
  }

  handleSubmitInfo = (details) => {
    this.setState({
      general : {
      name : details.name,
      email : details.email,
      phone : details.phone,
      bio : details.bio  
      },
      slide : this.state.slide + 1
    })
  }

  handleSubmitEdu = (details, bool) => {
    if(!( details[0] !== '')){
      this.setState({
      education: [...this.state.education, details]
      })
    }
    bool && this.setState({slide : this.state.slide + 1})
  }

  handleSubmitExp = (details, bool) => {
    if(!( details[0] !== '')){
      this.setState({
      experience: [...this.state.experience, details],
      })
    }
    bool && this.setState({slide : this.state.slide + 1})
  }

  handleSubmitSkill = (details, bool) => {
    if(!( details.skill[0] !== '')){
      this.setState({
      skills: [...this.state.skills, details],
      })
    }
    bool && this.setState({slide : this.state.slide + 1})
  }

  render() {
    const general = this.state
    const slide = this.state.slide

    return (
      <div>
        {slide === 0 ? 
          // General information form
          <InfoForm onSubmit = {this.handleSubmitInfo} details = {general.general}/> 
          : 
          slide === 1 ?
          // Education form
          <EduForm onSubmit = {this.handleSubmitEdu}/>
          : 
          slide === 2 ?
          // Employment form
          <ExpForm onSubmit = {this.handleSubmitExp}/>
          :
          slide === 3 ?
          // Skills form
          <SkillForm onSubmit = {this.handleSubmitSkill}/>
          :
          slide === 4 &&
          // All gathered information
          <All general = {general} />
        }
      </div>
    );
  }
}

export default App;
