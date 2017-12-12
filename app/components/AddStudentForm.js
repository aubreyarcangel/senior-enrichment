import {createNewStudent} from '../reducers/students';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllStudents from './AllStudents';

class AddStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: '',
      clickedbutton: false
  };
  this.studentFnameChangeHandler = this.studentFnameChangeHandler.bind(this);
  this.studentLnameChangeHandler = this.studentLnameChangeHandler.bind(this);
  this.studentEmailChangeHandler = this.studentEmailChangeHandler.bind(this);
  this.studentGpaChangeHandler = this.studentGpaChangeHandler.bind(this);
  this.studentCampusChangeHandler = this.studentCampusChangeHandler.bind(this);
  this.clickHandler = this.clickHandler.bind(this);  
  this.submitHandler = this.submitHandler.bind(this);
}

  studentFnameChangeHandler(event) {
    this.setState({firstName: event.target.value, isDirty: true});
  }

  studentLnameChangeHandler(event) {
    this.setState({lastName: event.target.value, isDirty: true});
  }

  studentEmailChangeHandler(event) {
    this.setState({email: event.target.value, isDirty: true});
  }

  studentGpaChangeHandler(event) {
    this.setState({gpa: event.target.value, isDirty: true});    
  }

  studentCampusChangeHandler(event) {
    this.setState({campusId: event.target.value, isDirty: true});    
  }

  clickHandler() {
    this.setState({clickedbutton: !this.state.clickedbutton});
  }

  submitHandler(event) {
    event.preventDefault();
    // const student = this.state
    this.props.createStudent({ firstName: this.state.firstName, 
      lastName: this.state.lastName, email: this.state.email, gpa: this.state.gpa, campusId: this.state.campus });
    this.setState({firstName: '', lastName: '', email: '', gpa: 0, campusId: 0, isDirty: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>+ ADD NEW STUDENT +</button>
      {this.state.clickedbutton ?
        (
        <div>
          <form id="new-student-form" onSubmit={this.submitHandler}>
            <div>
              <label>First Name: </label>
                <input
                  value={this.state.firstName}
                  onChange={this.studentFnameChangeHandler}
                  type="text"
                  placeholder="First Name:" />
                <label>Last Name: </label>
                <input
                  value={this.state.lastName}
                  onChange={this.studentLnameChangeHandler}
                  type="text"
                  placeholder="Last Name:" />
                <label>Email: </label>
                <input
                  value={this.state.email}
                  onChange={this.studentEmailChangeHandler}
                  type="email"
                  placeholder="Email:" />
                <label>GPA: </label>
                <input
                  value={this.state.gpa}
                  onChange={this.studentGpaChangeHandler}
                  type="number"
                  placeholder="GPA:" />
                <label>Campus: </label>  
                <input
                  value={this.state.campusId}
                  onChange={this.studentCampusChangeHandler}
                  type="number"
                  placeholder="Campus Number" />
              <span>
                <button type="submit">Submit!</button>
              </span>
            </div>
          </form>
        </div>) : (<div />)
      }
  </div>
    );
  }
}

const mapStateToProps = ({campuses}) => ({campuses});

const mapDispatchToProps = dispatch => {
  return {
    createStudent: function(info) {dispatch(createNewStudent(info));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm);
