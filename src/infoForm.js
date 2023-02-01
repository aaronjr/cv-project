import React, { useState } from "react";

export const InfoForm = props => {

   const [info, setInfo] = useState({
     name: props.state.general.name,
     email: props.state.general.email,
     phone: props.state.general.phone,
     bio: props.state.general.bio,
   });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(info)
  }

  const normalChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => normalChange(e)}
          value={info.name}
          name={"name"}
          type="text"
          id="name"
        />
        <label htmlFor="email">E-mail</label>
        <input
          onChange={(e) => normalChange(e)}
          value={info.email}
          name={"email"}
          type="text"
          id="email"
        />
        <label htmlFor="phone">Phone number</label>
        <input
          onChange={(e) => normalChange(e)}
          value={info.phone}
          name={"phone"}
          type="number"
          id="phone"
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          onChange={(e) => normalChange(e)}
          name={"bio"}
          value={info.bio}
          type="text"
          id="bio"
        />
        <button type="submit" onClick={props.handleClick}>
          Save
        </button>
      </form>
    </div>
  );
}