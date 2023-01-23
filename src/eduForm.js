import React, { Component } from "react";
import uniqid from "uniqid";

export default class EduForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: uniqid(),
      schoolName : '',
      lesson: {
        name: '',
        grade: '',
        key: uniqid()
      },
      lessons: [],
      yearFrom: '',
      yearTo:'',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  prevent(e){
    e.preventDefault()
  }

  handleSubmit(bool){
    this.props.onSubmit(this.state, bool)
    this.setState({
      key: uniqid(),
      schoolName : '',
      lesson: {
        name: '',
        grade: '',
        key: uniqid()
      },
      lessons: [],
      yearFrom: '',
      yearTo:'',
    })
  }

  render() {
    const details = this.state

    return (
      <div>
        <form>
          <label htmlFor="name">School name</label>
            <input
              onChange={(e) => this.setState({schoolName : e.target.value})}
              value={details.schoolName || ''}
              type="text"
              id="name"
            />
            <label htmlFor="lessons">Lesson</label>
            <input
              onChange={(e) => this.setState({lesson: {name: e.target.value, grade: this.state.lesson.grade, key: this.state.lesson.key,}})}
              value={details.lesson.name || ''}
              type="text"
              id="lessons"
            />
            <label htmlFor="grade">Grade</label>
            <input
              onChange={(e) => this.setState({lesson: {name: this.state.lesson.name, grade: e.target.value, key: this.state.lesson.key,}})}
              value={details.lesson.grade || ''}
              type="text"
              id="grade"
            />
            <button type='button' onClick={() => {
              this.setState({lessons: [...this.state.lessons, this.state.lesson]})
              this.setState({lesson: {name:'', key: uniqid(), grade:'' }}) 
            }}>Add lesson</button>
            <label htmlFor="yearFrom">From which year?</label>
            <input
              onChange = {(e) => this.setState({yearFrom : e.target.value})}
              value={details.yearFrom || ''}
              type="text"
              id="yearFrom"
            />
            <label htmlFor="yearTo">Until which year?</label>
            <input
              onChange={(e) => this.setState({yearTo : e.target.value})}
              value={details.yearTo || ''}
              type="text"
              id="yearTo"
            />
            <button type='button' onClick = { this.prevent, () => this.handleSubmit(false)}>Add another school</button>
            <button type='button' onClick = { this.prevent, () => this.handleSubmit(true)}>Submit</button>
        </form>
      </div>
    );
  };
}