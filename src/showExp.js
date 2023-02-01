import React from "react";

export const ShowExp = props => {

  const experience = props.experience

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
                <button className="edit" onClick = {() => props.onClick(exp.key)}>Edit</button>
                <button className="del" onClick = {() => props.delete('experience', exp.key)}>Delete</button>
              </ul>)
            })}
            <button className="add" onClick = {() => props.onClick(0)}>Add an experience</button>
          </div>
        }
      </div>
  )
}