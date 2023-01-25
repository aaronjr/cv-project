import React, { Component } from "react";
import ShowEdu from "./showEdu"
import ShowGeneral from "./showGeneral"
import ShowExp from "./showExp"
import ShowSkills from "./showSkills"

export default class All extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const general = this.props.general.general
    const education = this.props.general.education
    const experience = this.props.general.experience
    const skills = this.props.general.skills

    return (
      <div>
        <ShowGeneral general = {general} onClick = {this.props.handleEditGen} />
        <ShowEdu education = {education} deleteLesson = {this.props.deleteLesson}  delete = {this.props.handleDelete} onClick = {this.props.handleEditEdu} />
        <ShowExp experience = {experience} delete = {this.props.handleDelete} onClick = {this.props.handleEditExp} />
        <ShowSkills skills = {skills} delete = {this.props.handleDelete} handleAddSkill = {this.props.handleAddSkill}/>
      </div>
    )
  }
}