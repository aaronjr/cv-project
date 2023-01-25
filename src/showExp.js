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
            experience[0].employer !== '' &&
            <div>
            <h3>Experience</h3>
              {experience.map((exp) => {
                return (
                <ul key={exp.key}>
                  <li>Employer: {exp.employer} ({exp.yearFrom} - {exp.yearTo})</li>
                  <li>Title: {exp.title}</li>
                  <li>Job description: {exp.description}</li>
                </ul>)
              })}
            </div>
          }
        </div>
    )
  }
}