import React, { Component } from "react";

export default class ShowExp extends Component {

  render(){
    const experience = this.props.experience

    return (
        <div>
          {
            <div>
            <h3>Experience</h3>
              {experience.map((exp) => {
                return (
                exp.employer !== '' &&
                <ul className = "experienceHolder" key={exp.key}>
                  <li style={{fontWeight:'bold'}}>{exp.employer} <span className="dates">{exp.yearFrom} - {exp.yearTo}</span></li>
                  <li style={{fontStyle:'italic', marginBottom:'5px'}}>{exp.title}</li>
                  <li>Job description: {exp.description}</li>
                  <button className="edit" onClick = {() => this.props.onClick(exp.key)}>Edit</button>
                  <button className="del" onClick = {() => this.props.delete('experience', exp.key)}>Delete</button>
                </ul>)
              })}
              <button onClick = {() => this.props.onClick(0)}>Add a experience</button>
            </div>
          }
        </div>
    )
  }
}