import React, { Component } from "react";
import uniqid from "uniqid";

export default class ExpForm extends Component {
  constructor(props) {
    super(props);

    // check for editExp (only needed for editing educations.)
    const editExp = this.props.editExp === null ? null :  this.props.editExp[0]
    
    // set with old details or blank
    this.props.editExp !== null ?
    this.state = {
      key: editExp.key,
      employer : editExp.employer,
      title: editExp.title,
      yearFrom: editExp.yearFrom,
      yearTo: editExp.yearTo,
      description: editExp.description
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
  // function to prevent default, as not accesible inside a function
  prevent(e){
    e.preventDefault()
  }

  handleSubmit(bool){
    // will pass the state back to app
    // reset this state to all blank
    // bool with either show user new form or 
    // progress to other forms. 
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
      // on change will update into state
      // value is either the information or blank if blank
      // buttons will either show a blank form or move foward
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
            <textarea
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