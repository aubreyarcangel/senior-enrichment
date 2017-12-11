import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeCampus, createNewCampus} from '../reducers/campuses';
import AddCampusForm from './AddCampusForm'




const AllCampuses = props => {
  let campuses = props.campuses;
  let students = props.students;
  let deleteCampus = props.deleteCampus;

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
                <button onClick={() => props.deleteCampus(campus)}>DELETE CAMPUSX</button>
              </li>
           );
            })}
        </ul>
        <AddCampusForm />


    </div>

  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCampus: function(campus) {dispatch(removeCampus(campus, ownProps.history));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
