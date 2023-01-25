import React, { Component } from "react";

export default class ShowEdu extends Component {
  constructor(props) {
    super(props);
  } 

  render(){
    const education = this.props.education
    return (
        <div>
        {
          <div>
          <h3>Education</h3>
          {education.map((edu) => {
            return (
              edu.schoolName !== '' &&
              <ul key={edu.key}>
                <li>School name: {edu.schoolName}</li>
                <li>From: {edu.yearFrom}</li>
                <li>To: {edu.yearTo}</li>
                <li>Lessons: </li>
                <ul>
                  {edu.lessons.map((lesson) => <li key={lesson.key}>{lesson.grade} {lesson.name} <button onClick = {() => this.props.deleteLesson(edu.key, lesson.key)}>Delete lesson</button> </li>)}
                </ul>
                <button onClick = {() => this.props.onClick(edu.key)}>Edit</button>
                <button onClick = {() => this.props.delete('education', edu.key)}>Delete</button>
              </ul>
          )
          })}
          <button onClick = {() => this.props.onClick(0)}>Add a school</button>
          </div>
        }
        </div>
    )
  }
}