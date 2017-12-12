import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
// import EditStudentForm from './EditStudentForm';


// need to fix EditStudentForm
const SingleStudent = props => {
  const { student } = props;
  console.log('this is props:', props)

    const loadingJSX = <h1>Loading...</h1>;
    return (
      <div>
        {student ? (
          <div>
          <ul>
            <li>Name: {student.name}</li>
            <li>GPA: {student.gpa}</li>
            <li>email: {student.email}</li>
            <li>Campus: <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link></li>
            </ul>
            </div>
          ) : loadingJSX
        }
        </div>
      );
    };
    
const mapStateToProps = (state, ownProps) => {
  const studentId = +ownProps.match.params.id;
    return {
     student: state.students.find(student => student.id === studentId)     };
};
    
    
export default connect(mapStateToProps)(SingleStudent);
