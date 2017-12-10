import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import CampusAddForm from './CampusAddform';

const AllCampuses = props => {
  let campuses = props.campuses;
  let students = props.students;

  return (
    <div>
      <h1>Check out our campuses! We intergalactic!</h1>
        <ul>{campuses.map(campus => {
          let studentLength = students.filter(student => student.campusId == campus.id).length;
            return (
              <li key={campus.id}>
                <Link to={`campuses/${campus.id}`}> {campus.name}
                </Link>
                <img src= {campus.imgUrl} height ="500" width = "500" />
              </li>
           );
            })}
        </ul>
        <Link to={`/add-campus`}>Add New Campus</Link>
        
    </div>

  );
};

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    students: state.students
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // deleteCampus: function(campus) {dispatch(deleteCampusFromServerA(campus, ownProps.history))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
