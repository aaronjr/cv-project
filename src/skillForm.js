import React, { useState } from "react";
import uniqid from "uniqid";

export const SkillForm = props => {

  const [skill, setSkill] = useState({
    key: uniqid(),
    skill: ''
  })
   
  const prevent = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (bool) => {
    props.onSubmit(skill, bool)
    setSkill({
      key: uniqid(),
      skill: ''
    })
  }

  const handleChange = (e) => {
    setSkill({...skill, skill:e.target.value })
  }
  
  return (
    <div>
      <form>
        <label htmlFor="skill">Skills</label>
        <input
          onChange={(e) => handleChange(e)}
          value={skill.skill}
          name="skill"
          type="text"
          id="skill"
        />
        <button
          type="button"
          onClick={(prevent, () => handleSubmit(false))}
        >
          Add another skill
        </button>
        <button
          type="button"
          onClick={(prevent, () => handleSubmit(true))}
        >
          Submit
        </button>
      </form>
    </div>
  );
}