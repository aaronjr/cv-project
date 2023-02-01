import React, { useState } from "react";
import { useEffect } from "react";
import uniqid from "uniqid";

export const ExpForm = props => {
 
  // set state and setters
  const [editExp, setEditExp] = useState(null)

  // set as blank
  const [expState, setExpState] = useState({
    key: uniqid(),
    employer : '',
    title: '',
    yearFrom: '',
    yearTo:'',
    description: ''
  })

  // check for prescnce of data to be edited
  useEffect(()=>{
    props.editExp === null ? setEditExp(null) :  setEditExp(props.editExp[0])
  }, [props.editExp])

  // set with old details if present
  useEffect(()=>{
    if(editExp !== null){
      setExpState({
        key: editExp.key,
        employer : editExp.employer,
        title: editExp.title,
        yearFrom: editExp.yearFrom,
        yearTo: editExp.yearTo,
        description: editExp.description
      })
    }
  }, [editExp])
  
  // function to prevent default, as not accesible inside a function
  const prevent = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (bool) => {
    // will pass the state back to app
    // reset this state to all blank
    // bool with either show user new form or 
    // progress to other forms. 
    props.onSubmit(expState, bool)
    setExpState({
      key: uniqid(),
      employer : '',
      title: '',
      yearFrom: '',
      yearTo:'',
      description: ''
    })
  }

  const normalChange = (e) => {
    setExpState({ ...expState, [e.target.name]: e.target.value });
  };

  return (
    // on change will update into state
    // value is either the information or blank if blank
    // buttons will either show a blank form or move foward
    <div>
      <form>
        <label htmlFor="employer">Employer</label>
        <input
          onChange={(e) => normalChange(e)}
          value={expState.employer}
          name="employer"
          type="text"
          id="employer"
        />
        <label htmlFor="title">Job title</label>
        <input
          onChange={(e) => normalChange(e)}
          value={expState.title}
          name="title"
          type="text"
          id="title"
        />
        <label htmlFor="yearFrom">From which year?</label>
        <input
          onChange={(e) => normalChange(e)}
          value={expState.yearFrom}
          name="yearFrom"
          type="text"
          id="yearFrom"
        />
        <label htmlFor="yearTo">Until which year?</label>
        <input
          onChange={(e) => normalChange(e)}
          value={expState.yearTo}
          name="yearTo"
          type="text"
          id="yearTo"
        />
        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e) => normalChange(e)}
          value={expState.description}
          name="description"
          type="text"
          id="Description"
        />
        <button type="button" onClick={(prevent, () => handleSubmit(false))}>
          Add experience
        </button>
        <button type="button" onClick={(prevent, () => handleSubmit(true))}>
          Save
        </button>
      </form>
    </div>
  );

}