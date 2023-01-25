import React, { Component } from "react";

export default class ShowSkills extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const skills = this.props.skills
    // handlers passed from App.js.
    // changed how its called depending on parameters
    // if no skills, dont load its heading
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
                <li key={skill.key}>{skill.skill} <button onClick = {() => this.props.delete('skills', skill.key)}>Delete</button> </li> 
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