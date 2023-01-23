import React, { Component } from "react";
import InfoForm from "./infoForm"
import EduForm from "./eduForm"
import ShowEdu from "./showEdu"
import ExpForm from "./expForm"
import './index.css';
import All from "./All"

// previous jobs with description
// skills


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        email: '',
        phone: '',
        bio: '',
      }
      ,
      education : [],
      experience : [],
      skills : [],
      slide: 0
    };
  }

  handleSubmitInfo = (details) => {
    this.setState({
      general : {
      name : details.name,
      email : details.email,
      phone : details.phone,
      bio : details.bio  
      },
      slide : this.state.slide + 1
    })
  }

  handleSubmitEdu = (details, bool) => {
    this.setState({
     education: [...this.state.education, details]
    })
    bool && this.setState({slide : this.state.slide + 1})
  }

  handleSubmitExp = (details, bool) => {
    this.setState({
     experience: [...this.state.experience, details],
    })
    bool && this.setState({slide : this.state.slide + 1})
  }

  render() {
    const general = this.state
    const slide = this.state.slide

    return (
      <div>
        {slide === 0 ? 
          // general form
          <>
            <InfoForm onSubmit = {this.handleSubmitInfo} details = {general.general}/> 
            <All general = {general} />
          </>
          : 
          slide === 1 ?
          // education form
          <EduForm onSubmit = {this.handleSubmitEdu}/>
          : 
          slide === 2 ?
          // employment
          <ExpForm onSubmit = {this.handleSubmitExp}/>
          :
          slide === 3 ?
          // skills
          <InfoForm onSubmit = {this.handleSubmitInfo} details = {general.general}/> 
          :
          slide === 4 &&
          // all info
          <All general = {general} />
        }
      </div>
    );
  }
}

export default App;


// {showGenInfoForm ? 
//   <InfoForm onSubmit = {this.handleSubmitInfo} details = {general}/> 
//   : 
//   <>
//     <p>{general.name} {general.email} {general.phone} </p>
//     <button onClick={() => this.setState({showGenInfoForm : true})}> Edit your information </button>
//   </>
// }
// {showEduForm ?
//   <EduForm onSubmit = {this.handleSubmitEdu} />
// :
// <>
//   <ShowEdu education = {edu}/>
//   <button onClick={() => this.setState({showEduForm : true})}> Add other schools</button>
// </>
// }