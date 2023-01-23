import React, { Component } from "react";

export default class ShowSkills extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const skills = this.props.skills

    return (
        <>
          {skills || <h3>Skills</h3>}
          <ul>
            {skills.map((skill) => <li key={skill.key}>{skill.skill}</li> )}
           </ul>
        </>
    )
  }
}