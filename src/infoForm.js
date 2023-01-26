import React, { Component } from "react";

export default class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : props.details.name,
      email: props.details.email,
      phone: props.details.phone,
      bio: props.details.bio
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
          <label htmlFor="name">Name</label>
            <input
              onChange={(e) => this.setState({name : e.target.value})}
              value={details.name || ''}
              type="text"
              id="name"
            />
            <label htmlFor="email">E-mail</label>
            <input
              onChange={(e) => this.setState({email : e.target.value})}
              value={details.email || ''}
              type="text"
              id="email"
            />
            <label htmlFor="phone">Phone number</label>
            <input
              onChange={(e) => this.setState({phone : e.target.value})}
              value={details.phone || ''}
              type="number"
              id="phone"
            />
            <label htmlFor="bio">Bio</label>
            <textarea
              onChange={(e) => this.setState({bio : e.target.value})}
              value={details.bio || ''}
              type="text"
              id="bio"
            />
            <button type='submit' onClick = {this.props.handleClick}>Save</button>
        </form>
      </div>
    );
  };
}