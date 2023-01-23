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
        <ShowGeneral general = {general} />
        <ShowEdu education = {education} />
        <ShowExp experience = {experience} />
        <ShowSkills skills = {skills} />
      </div>
    )
  }
}