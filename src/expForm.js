import React, { Component } from "react";
import uniqid from "uniqid";

export default class ExpForm extends Component {
  constructor(props) {
    super(props);

    const editExp = this.props.editExp && this.props.editExp[0]

    this.props.editExp ?
    this.state = {
      key: editExp.key,
      employer : editExp.employer,
      title: editExp.title,
      yearFrom: editExp.yearFrom,
      yearTo: editExp.yearTo,
      description: editExp.yearFrom
    }
    :
    this.state = {
      key: uniqid(),
      employer : '',
      title: '',
      yearFrom: '',
      yearTo:'',
      description: ''
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
      employer : '',
      title: '',
      yearFrom: '',
      yearTo:'',
      description: ''
    })
  }

  render() {
    const details = this.state

    return (
      <div>
        <form>
          <label htmlFor="employer">Employer</label>
            <input
              onChange={(e) => this.setState({employer : e.target.value})}
              value={details.employer || ''}
              type="text"
              id="employer"
            />
            <label htmlFor="title">Job title</label>
            <input
              onChange={(e) => this.setState({title : e.target.value})}
              value={details.title || ''}
              type="text"
              id="title"
            />
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
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) => this.setState({description : e.target.value})}
              value={details.description || ''}
              type="text"
              id="Description"
            />
            <button type='button' onClick = { this.prevent, () => this.handleSubmit(false)}>Add another job</button>
            <button type='button' onClick = { this.prevent, () => this.handleSubmit(true)}>Submit</button>
        </form>
      </div>
    );
  };
}