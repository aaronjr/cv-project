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
      slide: 0,
      editEdu: null,
      editExp: null

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
    // check for exsitiing key, delete and add again but with the update info
    // this is due to the edit button
    const update = this.state.education.filter((edu) => edu.key !== details.key)
    this.setState({
    education: [...update, details],
    editEdu: null
    })
    bool && this.setState({slide : this.state.slide + 1})
  }

  handleSubmitExp = (details, bool) => {
    // check for exsitiing key, delete and add again but with the update info
    // this is due to the edit button
    const update = this.state.experience.filter((exp) => exp.key !== details.key)
    this.setState({
      experience: [...update, details],
      editExp: null
    })
    bool && this.setState({slide : this.state.slide + 1})
  }

  handleSubmitSkill = (details, bool) => {
    if(details.skill !== ''){
      this.setState({
        skills: [...this.state.skills, details],
      })
    }
    bool && this.setState({slide : this.state.slide + 1})
  }

  handleEditEdu = (key) => {
    const editEdu = this.state.education.filter((edu)=> edu.key === key )
    this.setState({
      slide: 1,
      editEdu: editEdu
    })
  }

  handleEditExp = (key) => {
    const editExp = this.state.experience.filter((exp)=> exp.key === key )
    this.setState({
      slide: 2,
      editExp: editExp
    })
  }

  handleEditGen = () => {
    this.setState({
      slide: 0,
    })
  }

  handleDeleteSkill = (key) => {
    console.log(key)
    const update = this.state.skills.filter((skill) => skill.key !== key)
    this.setState({
      skills: [...update],
      slide: 4
    })
  }

  handleAddSkill = () => {
    this.setState({
      slide:3
    })
  }

  render() {
    const general = this.state
    const slide = this.state.slide

    return (
      <div className="container">
        {slide === 0 ? 
          // General information form
          <InfoForm onSubmit = {this.handleSubmitInfo} details = {general.general}/> 
          : 
          slide === 1 ?
          // Education form
          <EduForm onSubmit = {this.handleSubmitEdu} editEdu = {this.state.editEdu} />
          : 
          slide === 2 ?
          // Employment form
          <ExpForm onSubmit = {this.handleSubmitExp} editExp = {this.state.editExp}/>
          :
          slide === 3 ?
          // Skills form
          <SkillForm onSubmit = {this.handleSubmitSkill}/>
          :
          slide === 4 &&
          // All gathered information
          <All general = {general} handleAddSkill = {this.handleAddSkill} handleDeleteSkill = {this.handleDeleteSkill} handleEditExp = {this.handleEditExp}  handleEditEdu = {this.handleEditEdu} handleEditGen = {this.handleEditGen}/>
        }
      </div>
    );
  }
}

export default App;
