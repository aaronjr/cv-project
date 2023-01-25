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
        <ShowEdu education = {education} onClick = {this.props.handleEditEdu} />
        <ShowExp experience = {experience} onClick = {this.props.handleEditExp} />
        <ShowSkills skills = {skills} onClick = {this.props.handleDeleteSkill} handleAddSkill = {this.props.handleAddSkill}/>
      </div>
    )
  }
}