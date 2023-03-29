import React, { useState } from "react";
import { InfoForm } from "./infoForm";
import { EduForm } from "./eduForm";
import { ExpForm } from "./expForm";
import { SkillForm } from "./skillForm";
import { Header } from "./header";
import "./index.css";
import { All } from "./All";

export const App = () => {
  // initiate states
  const [appState, setAppState] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
      bio: "",
    },
    education: [],
    experience: [],
    skills: [],
    editEdu: null,
    editExp: null,
  });

  const [slideNumber, setSlideNumber] = useState(0)
  const [shouldSlide, setShouldSlide] = useState(true)

  // control which page is shown
  const slide = () => {
    slideNumber >= 3 &&
      setShouldSlide(false);
    
    shouldSlide === true
      ? setSlideNumber(slideNumber + 1)
      : setSlideNumber(4);
  };

  // take the input and update the state
  const handleSubmitInfo = (details) => {
    setAppState({
      ...appState,
      general: {
        name: details.name,
        email: details.email,
        phone: details.phone,
        bio: details.bio,
      },
    });
    // change slide
    slide();
  };

  const handleSubmitEdu = (details, bool) => {
    // check for exsitiing key, delete but and add again with the updated info
    // this is due to the edit button
    const update = appState.education.filter((edu) => edu.key !== details.key);
    const newLessons = details.lessons;
    const education = appState.education.filter(
      (edu) => edu.key === details.key
    );
    let oldLessons = "";
    if (education.length > 0) {
      oldLessons = education[0].lessons;
      details.lessons = [...newLessons, ...oldLessons];
    }
    // remove editEdu so the form loads as empty again
    // add education to state
    setAppState({
      ...appState,
      education: [...update, details],
      editEdu: null,
    });
    // check if a new form should be loaded or a new slide
    // empty form is handled in the component
    bool && slide();
  };

  const handleSubmitExp = (details, bool) => {
    // check for exsitiing key, delete and add again but with the update info
    // this is due to the edit button
    const update = appState.experience.filter((exp) => exp.key !== details.key);
    setAppState({
      ...appState,
      experience: [...update, details],
      editExp: null,
    });
    // check if a new form should be loaded or a new slide
    // empty form is handled in the component
    bool && slide();
  };

  const handleSubmitSkill = (details, bool) => {
    // dont add blank skill
    if (details.skill !== "") {
      setAppState({
        ...appState,
        // append to array
        skills: [...appState.skills, details],
      });
    }
    // check if a new form should be loaded or a new slide
    // empty form is handled in the component
    bool && slide();
  };

  const handleEditEdu = (key) => {
    // update info in state, so it can be passed into the form, for editing a section
    const editEdu = appState.education.filter((edu) => edu.key === key);
    setAppState({
      // set slide for this form
      ...appState,
      editEdu: editEdu.length === 0 ? null : editEdu,
    });
    setSlideNumber(1)
  };

  const handleEditExp = (key) => {
    // update info in state, so it can be passed into the form, for editing a section
    let editExp = appState.experience.filter((exp) => exp.key === key);
    setAppState({
      ...appState,
      editExp: editExp.length === 0 ? null : editExp,
    });
    setSlideNumber(2);
  };

  const handleEditGen = () => {
    setSlideNumber(0);
  };

  const handleDelete = (location, key) => {
    // delete function for many cases, just check key against user request
    const update = appState[`${location}`].filter((a) => a.key !== key);
    setAppState({
      ...appState,
      [`${location}`]: [...update],
      // set slide for this form
    });
    setSlideNumber(4);
  };

  const handleAddSkill = () => {
  setSlideNumber(3);
  };

  const deleteLesson = (eduKey, lessonKey) => {
    // list of educations that arent being edited
    const notSchool = appState.education.filter((edu) => edu.key !== eduKey);
    // chosen education
    const school = appState.education.filter((edu) => edu.key === eduKey);
    // remove chosen lesson from this education
    const list = school[0].lessons.filter((lesson) => lesson.key !== lessonKey);
    // set this school to new lesson list
    school[0].lessons = [...list];
    // add all other educaitons and this updated one
    setAppState({
      ...appState,
      education: [...notSchool, school[0]],
    });
  };

  // load correct component based on which slide.
  return (
    <>
      {slideNumber === 0 ? (
        // General information form
        <>
          <Header />
          <div className="formContainer">
            <InfoForm onSubmit={handleSubmitInfo} state={appState} />
          </div>
        </>
      ) : slideNumber === 1 ? (
        // Education form
        <>
          <Header />
          <div className="formContainer">
            <EduForm onSubmit={handleSubmitEdu} editEdu={appState.editEdu} />
          </div>
        </>
      ) : slideNumber === 2 ? (
        // Employment form
        <>
          <Header />
          <div className="formContainer">
            <ExpForm onSubmit={handleSubmitExp} editExp={appState.editExp} />
          </div>
        </>
      ) : slideNumber === 3 ? (
        // Skills form
        <>
          <Header />
          <div className="formContainer">
            <SkillForm onSubmit={handleSubmitSkill} />
          </div>
        </>
      ) : (
        slideNumber === 4 && (
          // All gathered information
          <>
            <Header />
              <All
                state={appState}
                deleteLesson={deleteLesson}
                handleAddSkill={handleAddSkill}
                handleDelete={handleDelete}
                handleEditExp={handleEditExp}
                handleEditEdu={handleEditEdu}
                handleEditGen={handleEditGen}
              />
          </>
        )
      )}
    </>
  );
};
