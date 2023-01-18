import React, { Component } from "react";

export default class ShowEdu extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const education = this.props.education

    return (
        <>
          {education.map((edu) => {
          return <ul>
            <li>School name: {edu.schoolName}</li>
            <li>From: {edu.yearFrom}</li>
            <li>To: {edu.yearTo}</li>
            <li>Lessons; </li>
            {edu.lessons.map((lesson) => {
               return (
               <ul>
                <li key={lesson.id}>{lesson.name}</li>
              </ul>)
            })}
          </ul>
          })}
        </>
    )
  }
}