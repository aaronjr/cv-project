import React, { Component } from "react";
import uniqid from "uniqid";

export default class EduForm extends Component {
  constructor(props) {
    super(props);

    // check for editEdu (only needed for editing educations.)
    const editEdu = this.props.editEdu === null ? null : this.props.editEdu[0]

    // set with old details or blank
    this.props.editEdu !== null ?
    this.state = {
      key: editEdu.key,
      schoolName: editEdu.schoolName,
      lesson: {
        name: '',
        grade: '',
        key: uniqid()
      },
      lessons: [],
      yearFrom: editEdu.yearFrom,
      yearTo: editEdu.yearTo,
    }
    :
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

  // function to prevent default, as not accesible inside a function
  prevent(e){
    e.preventDefault()
  }
  // will pass the state back to app
  // reset this state to all blank
  // bool with either show user new form or 
  // progress to other forms. 
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
      // on change will update into state
      // value is either the information or blank if blank
      // buttons will either show a blank form or move foward
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
            <div className="buttonHolder">
              <button type='button' onClick = { this.prevent, () => this.handleSubmit(false)}>Add another</button>
              <button type='button' onClick = { this.prevent, () => this.handleSubmit(true)}>Save</button>
            </div>
        </form>
      </div>
    );
  };
}