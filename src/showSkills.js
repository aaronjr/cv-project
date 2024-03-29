import React from "react";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export const ShowSkills = props => {
  const skills = props.skills
  // handlers passed from App.js.
  // changed how its called depending on parameters
  // if no skills, dont load its heading
  return (
    <div>
      {skills.length !== 0 ? (
        <div className="eachCategory">
          <h3>Skills</h3>
          <ul className="holder">
            <div className="Info skills">
              {skills.map((skill) => {
                return (
                  skill.skill !== "" && (
                    <li className="lesson" key={skill.key}>
                      {skill.skill}
                      <Icon
                        className="bin"
                        path={mdiDelete}
                        size={0.9}
                        onClick={() => props.delete("skills", skill.key)}
                      />
                    </li>
                  )
                );
              })}
            </div>
          </ul>
          <button className="add" onClick={props.handleAddSkill}>
            Add another skill
          </button>
        </div>
      ) : (
        <div className="eachCategory">
          <button className="add" onClick={props.handleAddSkill}>
            Add a skill
          </button>
        </div>
      )}
    </div>
  );
}