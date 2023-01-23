import React, { Component } from "react";
import uniqid from "uniqid";

export default class SkillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: uniqid(),
      skill: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  prevent(e){
    e.preventDefault()
  }

  handleSubmit(bool){
    this.props.onSubmit(this.state, bool)
    this.setState({
      skill: ''
    })
  }

  render() {
    const details = this.state

    return (
      <div>
        <form>
          <label htmlFor="skill">Skills</label>
            <input
              onChange={(e) => this.setState({skill : e.target.value, key: this.state.key})}
              value={details.skill || ''}
              type="text"
              id="skill"
            />
            <button type='button' onClick = { this.prevent, () => this.handleSubmit(false)}>Add another skill</button>
            <button type='button' onClick = { this.prevent, () => this.handleSubmit(true)}>Submit</button>
        </form>
      </div>
    );
  };
}