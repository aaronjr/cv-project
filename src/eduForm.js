import React, { useState } from "react";
import { useEffect } from "react";
import uniqid from "uniqid";

export const EduForm = props => {

  const [editEdu, setEditEdu] = useState(null)

  const [eduState, setEduState] = useState({
    key: uniqid(),
    schoolName: "",
    lesson: {
      name: "",
      grade: "",
      key: uniqid(),
    },
    lessons: [],
    yearFrom: "",
    yearTo: "",
  });

   // check for editEdu (only needed for editing educations.)
  
  useEffect(() => {
    props.editEdu === null ? setEditEdu(null) : setEditEdu(props.editEdu[0]);
  }, [props.editEdu]);

  useEffect(() => {
    if (editEdu !== null) {
      setEduState({
        key: editEdu.key,
        schoolName: editEdu.schoolName,
        lesson: {
          name: "",
          grade: "",
          key: uniqid(),
        },
        lessons: [],
        yearFrom: editEdu.yearFrom,
        yearTo: editEdu.yearTo,
      });
    }
    
  }, [editEdu]);
 
  // function to prevent default, as not accesible inside a function
  const prevent = (e) => {
    e.preventDefault()
  }

  // will pass the state back to app
  // reset this state to all blank
  // bool with either show user new form or 
  // progress to other forms. 
  const handleSubmit = (bool) => {
    props.onSubmit(eduState, bool)
    setEduState({
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

  const normalChange = (e) => {
    setEduState({...eduState, [e.target.name] : e.target.value})
  }

  const lessonChange = (e) => {
     setEduState({
       ...eduState,
       lesson: { ...eduState.lesson, [e.target.name]: e.target.value},
     });
  }

  const addLessons = () => {
    setEduState({
      ...eduState,
      lessons: [...eduState.lessons, eduState.lesson],
      lesson: { name: "", key: uniqid(), grade: "" },
    });
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Place of education</label>
        <input
          onChange={(e) => normalChange(e)}
          value={eduState.schoolName}
          name="schoolName"
          type="text"
          id="name"
        />
        <label htmlFor="lessons">Lesson</label>
        <input
          onChange={(e) => lessonChange(e)}
          value={eduState.lesson.name}
          name="name"
          type="text"
          id="lessons"
        />
        <label htmlFor="grade">Grade</label>
        <input
          onChange={(e) => lessonChange(e)}
          value={eduState.lesson.grade}
          name="grade"
          type="text"
          id="grade"
        />
        <button
          type="button"
          onClick={() => {
            addLessons();
          }}
        >
          Add lesson
        </button>
        <label htmlFor="yearFrom">
          From which year?<span className="dates">yyyy</span>
        </label>
        <input
          onChange={(e) => normalChange(e)}
          value={eduState.yearFrom}
          type="number"
          name="yearFrom"
          id="yearFrom"
        />
        <label htmlFor="yearTo">
          Until which year?<span className="dates">yyyy</span>
        </label>
        <input
          onChange={(e) => normalChange(e)}
          value={eduState.yearTo}
          type="number"
          name="yearTo"
          id="yearTo"
        />
        <div className="buttonHolder">
          <button type="button" onClick={(prevent, () => handleSubmit(false))}>
            Add education
          </button>
          <button type="button" onClick={(prevent, () => handleSubmit(true))}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}