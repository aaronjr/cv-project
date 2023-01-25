import React, { Component } from "react";

export default class ShowExp extends Component {
  constructor(props) {
    super(props);
  }

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
                <ul key={exp.key}>
                  <li>Employer: {exp.employer} {exp.yearFrom} - {exp.yearTo}</li>
                  <li>Title: {exp.title}</li>
                  <li>Job description: {exp.description}</li>
                  <button onClick = {() => this.props.onClick(exp.key)}>Edit</button>
                  <button onClick = {() => this.props.delete('experience', exp.key)}>Delete</button>
                </ul>)
              })}
              <button onClick = {() => this.props.onClick(0)}>Add a experience</button>
            </div>
          }
        </div>
    )
  }
}