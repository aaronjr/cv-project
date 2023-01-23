import React, { Component } from "react";

export default class ShowExp extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const experience = this.props.experience

    return (
        <>
          { !experience  && <h3>Experience</h3>}
          {experience.map((exp) => {
            return <ul key={exp.key}>
              <li>Employer: {exp.name} {exp.yearFrom} - {exp.yearTo}</li>
              <li>Title: {exp.title}</li>
              <li>Job description: {exp.description}</li>
            </ul>
          })
          }
        </>
    )
  }
}