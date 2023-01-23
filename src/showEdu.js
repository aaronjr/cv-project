import React, { Component } from "react";

export default class ShowEdu extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const education = this.props.education

    return (
        <>
          { !education  && <h3>Education</h3>}
          {education.map((edu) => {
          return <ul key={edu.key}>
            <li>School name: {edu.schoolName}</li>
            <li>From: {edu.yearFrom}</li>
            <li>To: {edu.yearTo}</li>
            <li>Lessons; </li>
            <ul>
            {edu.lessons.map((lesson) => {
               return (
                <li key={lesson.key}>{lesson.grade} {lesson.name}</li>
             )
            })}
             </ul>
          </ul>
          })}
          
        </>
    )
  }
}