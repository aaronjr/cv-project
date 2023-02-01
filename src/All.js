import React from "react";
import {ShowEdu} from "./showEdu"
import {ShowGeneral} from "./showGeneral"
import {ShowExp} from "./showExp"
import {ShowSkills} from "./showSkills"

export const All = props => {

  const general = props.state.general
  console.log(general)
  const education = props.state.education
  const experience = props.state.experience
  const skills = props.state.skills

  return (
    <div>
      <h1 className="CV">CV</h1>
      <button className="PDF" onClick={() => window.print()}>Create PDF</button>
      <ShowGeneral general = {general} onClick = {props.handleEditGen} />
      <ShowEdu education = {education} deleteLesson = {props.deleteLesson}  delete = {props.handleDelete} onClick = {props.handleEditEdu} />
      <ShowExp experience = {experience} delete = {props.handleDelete} onClick = {props.handleEditExp} />
      <ShowSkills skills = {skills} delete = {props.handleDelete} handleAddSkill = {props.handleAddSkill}/>
    </div>
  )
}