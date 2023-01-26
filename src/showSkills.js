import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export default class ShowSkills extends Component {
  
  render(){
    const skills = this.props.skills
    // handlers passed from App.js.
    // changed how its called depending on parameters
    // if no skills, dont load its heading
    return (
        <div>
          { 
          skills.length !== 0 ?
          <div className="eachCategory">
            <h3>Skills</h3>
            <ul className="holder skills">
              {skills.map((skill) => {
                return (
                skill.skill !== '' &&
                <li>{skill.skill}<Icon className="bin" path={mdiDelete} size={.90} onClick = {() => this.props.delete('skills', skill.key)}/></li>
                )
              })}
            </ul>
            <button className="add" onClick = {this.props.handleAddSkill}>Add another skill</button>
          </div>
          :
          <div className="eachCategory">
            <button className="add" onClick = {this.props.handleAddSkill}>Add a skill</button>
          </div>
          }
        </div>
    )
  }
}