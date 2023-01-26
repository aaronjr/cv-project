import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export default class ShowEdu extends Component {

  render(){
    const education = this.props.education
    return (
        <div>
        {
          <div className="eachCategory">
          <h3>Education</h3>
          {education.sort((a, b) => b.yearTo - a.yearTo).map((edu) => {
            return (
              edu.schoolName !== '' &&
              <ul key={edu.key} className="holder">
                <li className="titleInfo">{edu.schoolName} <span className="dates">{edu.yearFrom} - {edu.yearTo}</span></li>
                <li style={{marginBottom:'7px'}}>Subjects: </li>
                <ul>
                  {edu.lessons.sort((a, b) => a.grade.localeCompare(b.grade, 'en', { sensitivity: 'base' })).map((lesson) => <li key={lesson.key}>Grade: {lesson.grade} - {lesson.name} <Icon className="bin" path={mdiDelete} size={.90} onClick = {() => this.props.deleteLesson(edu.key, lesson.key)}/> </li>)}
                </ul>
                <button className="edit"onClick = {() => this.props.onClick(edu.key)}>Edit</button>
                <button className="del" onClick = {() => this.props.delete('education', edu.key)}>Delete</button>
              </ul>
          )
          })}
          <button className="add" onClick = {() => this.props.onClick(0)}>Add a school</button>
          </div>
        }
        </div>
    )
  }
}