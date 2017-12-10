import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { removeStudent } from '../reducers/students';

const AllStudents = (props) => {
  let students = props.students;


  return (
    <div>
      <h1>The Students</h1>
      <ul>
      {
        students.map(student => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`} >Name: {student.name}</Link>
              <button key={student.id} onClick={() => props.deleteHandler(student)}>X</button>
            </div>
          );
        })
      }
      </ul>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  if (ownProps.students) return {students: ownProps.students};
  else return {students: state.students};
  // return {
  //   // campuses: state.campuses,
  //   students: state.students
  // };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteHandler: (student) => dispatch(removeStudent(student, ownProps))};
  };

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
