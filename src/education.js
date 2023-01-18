import React, { Component } from "react";
import uniqid from "uniqid";

export default class EduForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName : '',
      lesson: {
        name: '',
        id: uniqid()
      },
      lessons: [],
      yearFrom: '',
      yearTo:'',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    const details = this.state

    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
        <label htmlFor="name">School name</label>
          <input
            onChange={(e) => this.setState({schoolName : e.target.value})}
            value={details.name}
            type="text"
            id="name"
          />
          <label htmlFor="lessons">Lessons</label>
          <input
            onChange={(e) => this.setState({lesson: {name: e.target.value, id: this.state.lesson.id,}})}
            value={details.lesson.name}
            type="text"
            id="lessons"
          />
          <button type='button' onClick={() => {this.setState({ lessons: [...this.state.lessons, this.state.lesson], lesson: {name:'', id : uniqid()}}) }}>Add lesson</button>
          <label htmlFor="yearFrom">From which year?</label>
          <input
            onChange = {(e) => this.setState({yearFrom : e.target.value})}
            value={details.yearFrom}
            type="text"
            id="yearFrom"
          />
          <label htmlFor="yearTo">Until which year?</label>
          <input
            onChange={(e) => this.setState({yearTo : e.target.value})}
            value={details.yearTo}
            type="text"
            id="yearTo"
          />
          <button type='submit' onClick = {this.props.handleClick}> Submit </button>
        </form>
      </div>
    );
  };
}