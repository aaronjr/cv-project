import React, { Component } from "react";
import InfoForm from "./infoForm"
import EduForm from "./eduForm"
import ExpForm from "./expForm"
import SkillForm from "./skillForm"
import Header from "./header"
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
      shouldSlide : true,
      editEdu: null,
      editExp: null
    };
  }

  // control which page is shown
  slide = () => {
    this.state.slide >= 3 && this.setState({shouldSlide: 0})
    this.state.shouldSlide === true ? this.setState({ slide: this.state.slide + 1}) : this.setState({ slide: 4})
  }

  // take the input and update the state
  handleSubmitInfo = (details) => {
    this.setState({
      general : {
      name : details.name,
      email : details.email,
      phone : details.phone,
      bio : details.bio  
      }
    })

    // change slide
    this.slide()
  }

  handleSubmitEdu = (details, bool) => {
    // check for exsitiing key, delete but and add again with the updated info
    // this is due to the edit button
    const update = this.state.education.filter((edu) => edu.key !== details.key)
    const newLessons = details.lessons
    const education = this.state.education.filter((edu) => edu.key === details.key)
    let oldLessons = ''
    if(education.length > 0){
      oldLessons = education[0].lessons
      details.lessons = [...newLessons, ...oldLessons]
    }
    // remce editEdu so the form loads as empty again
    // add education to state
    this.setState({
      education: [...update, details],
      editEdu: null
    })
    // check if a new form should be loaded or a new slide
    // empty form is handled in the component
    bool && this.slide()
  }

  handleSubmitExp = (details, bool) => {
    // check for exsitiing key, delete and add again but with the update info
    // this is due to the edit button
    const update = this.state.experience.filter((exp) => exp.key !== details.key)
    this.setState({
      experience: [...update, details],
      editExp: null
    })
    // check if a new form should be loaded or a new slide
    // empty form is handled in the component
    bool && this.slide()
  }

  handleSubmitSkill = (details, bool) => {
    // dont add blank skill
    if(details.skill !== ''){
      this.setState({
        // append to array
        skills: [...this.state.skills, details],
      })
    }
    // check if a new form should be loaded or a new slide
    // empty form is handled in the component
    bool && this.slide()
  }

  handleEditEdu = (key) => {
    // update info in state, so it can be passed into the form, for editing a section
    const editEdu = this.state.education.filter((edu)=> edu.key === key )
    this.setState({
      // set slide for this form
      slide: 1,
      editEdu:  editEdu.length === 0 ? null : editEdu
    })
  }

  handleEditExp = (key) => {
    // update info in state, so it can be passed into the form, for editing a section
    let editExp = this.state.experience.filter((exp)=> exp.key === key )
    this.setState({
      // set slide for this form
      slide: 2,
      editExp: editExp.length === 0 ? null : editExp
    })
  }

  handleEditGen = () => {
    this.setState({
      // set slide for this form
      slide: 0,
    })
  }

  handleDelete = (location, key) => {
    // delete function for many cases, just check key against user request
    console.log(location, key)
    const update = this.state[`${location}`].filter((a) => a.key !== key)
    this.setState({
      [`${location}`]: [...update],
      // set slide for this form
      slide: 4
    })
  }

  handleAddSkill = () => {
    this.setState({
       // set slide for this form
      slide:3
    })
  }

  deleteLesson = (eduKey, lessonKey) => {
    // list of educations that arent being edited
    const notSchool = this.state.education.filter((edu) => edu.key !== eduKey)
    // chosen education
    const school = this.state.education.filter((edu) => edu.key === eduKey)
    // remove chosen lesson from this education
    const list = school[0].lessons.filter(lesson => lesson.key !== lessonKey)
    // set this school to new lesson list
    school[0].lessons = [...list]
    // add all other educaitons and this updated one
    this.setState({
      education: [...notSchool, school[0]]
    })
  }

  render() {
    // current state
    const general = this.state
    const slide = this.state.slide

    // load correct component based on which slide.
    return (
      <>
        {slide === 0 ? 
          // General information form
          <div className="formContainer">
            <InfoForm onSubmit = {this.handleSubmitInfo} details = {general.general}/> 
          </div>
          : 
          slide === 1 ?
          // Education form
          <div className="formContainer">
            <EduForm onSubmit = {this.handleSubmitEdu} editEdu = {this.state.editEdu} />
          </div>
          : 
          slide === 2 ?
          // Employment form
          <div className="formContainer">
            <ExpForm onSubmit = {this.handleSubmitExp} editExp = {this.state.editExp}/>
          </div>
          :
          slide === 3 ?
          // Skills form
          <div className="formContainer">
            <SkillForm onSubmit = {this.handleSubmitSkill}/>
          </div>
          :
          slide === 4 &&
          // All gathered information
          <div className="all">
            <All deleteLesson = {this.deleteLesson}  general = {general} handleAddSkill = {this.handleAddSkill} handleDelete = {this.handleDelete} handleEditExp = {this.handleEditExp}  handleEditEdu = {this.handleEditEdu} handleEditGen = {this.handleEditGen}/>
          </div>
        }
      </>
    );
  }
}

export default App;
