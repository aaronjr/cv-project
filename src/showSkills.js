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
                return <li key={skill.key}>{skill.skill}</li>}
              )}
            </ul>
          </div>
          :
          <div></div>
          }
        </div>
    )
  }
}