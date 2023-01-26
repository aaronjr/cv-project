import React, { Component } from "react";

export default class ShowExp extends Component {

  render(){
    const experience = this.props.experience

    return (
        <div>
          {
            <div className="eachCategory">
            <h3>Experience</h3>
              {experience.sort((a, b) => b.yearTo - a.yearTo).map((exp) => {
                return (
                exp.employer !== '' &&
                <ul className = "holder" key={exp.key}>
                  <li className="titleInfo">{exp.employer} <span className="dates">{exp.yearFrom} - {exp.yearTo}</span></li>
                  <li style={{fontStyle:'italic', marginBottom:'5px'}}>{exp.title}</li>
                  <li className="bio">{exp.description}</li>
                  <button className="edit" onClick = {() => this.props.onClick(exp.key)}>Edit</button>
                  <button className="del" onClick = {() => this.props.delete('experience', exp.key)}>Delete</button>
                </ul>)
              })}
              <button className="add" onClick = {() => this.props.onClick(0)}>Add an experience</button>
            </div>
          }
        </div>
    )
  }
}