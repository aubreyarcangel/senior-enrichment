import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import EditCampusForm from './EditCampusForm';

const SingleCampus = props => {
  const { campus } = props;
  // let campusId = props.campusId;  
  let deleteCampus = props.deleteCampus;
  // let students = props.students.filter(student => student.campusId === Number(campusId));

    const loadingJSX = <h1>Loading...</h1>;
    return (
      <div>
        {campus ? (
          <div>
            <h1>{campus.name}</h1>
            <img src={campus.imgUrl} />
            <h2>Description: </h2>
            <h3>{campus.description}</h3>
            <h2>Students</h2>
            <ol>
              {
                campus.students.map(student => {
                  return <li key={student.id}>{student.name}</li>;
                })
              }
            </ol>
            <Link to={`/campuses/${campus.id}/update`}><button>UPDATE this Campus</button></Link>
            <Link to={`/campuses/${campus.id}/addStudent`}><button>ADD student here!</button></Link>
            <Route path="/campuses/:campusId/update" render={() => (<EditCampusForm campuses={props.campuses} campus={campus} />)} />
      

          </div>
          ) : loadingJSX
        }
      </div>

    );
  };

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campuses.find(campus => {
      return campus.id === +ownProps.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(SingleCampus);
