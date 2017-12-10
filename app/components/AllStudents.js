import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AllStudents = props => {
  return (
    <div>
      <h1>The Students</h1>
      {
        props.students.map(student => {
          return (
            <div key={student.id}>
              <h2>{ student.name }</h2>

            </div>
          );
        })
      }
    </div>
  );
};

// function mapStateToProps(state, ownProps) {
//   return {
//     // campuses: state.campuses,
//     students: state.students
//   };
// }

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     // deleteCampus: function(campus) {dispatch(deleteCampusFromServerA(campus, ownProps.history))}
//   }
// }

// connect(mapStateToProps, mapDispatchToProps)(AllStudents);

export default AllStudents;