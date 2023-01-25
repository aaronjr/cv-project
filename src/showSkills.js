import React, { Component } from "react";

export default class ShowSkills extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const skills = this.props.skills

    return (
        <div>
          { 
          skills.length !== 0 ?
          <div>
            <h3>Skills</h3>
            <ul>
              {skills.map((skill) => {
                return (
                skill.skill !== '' &&
                <li key={skill.key}>{skill.skill} <button onClick = {() => this.props.onClick(skill.key)}>Delete</button> </li> 
                )
              })}
            </ul>
            <button onClick = {this.props.handleAddSkill}>Add another skill</button>
          </div>
          :
          <button onClick = {this.props.handleAddSkill}>Add a skill</button>
          }
        </div>
    )
  }
}