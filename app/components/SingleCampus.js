import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

const SingleCampus = props => {
  // console.log(props)
  const { campus } = props;
  
    const loadingJSX = <h1>Loading...</h1>;
    return (
      <div>
        {campus ? (
          <div>
            <h1>{campus.name}</h1>
            <img src={campus.imgUrl} />
            <h2>Students</h2>
            <ol>
              {
                campus.students.map(student => {
                  return <li key={student.id}>{student.name}</li>;
                })
              }
            </ol>
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
} 

export default connect(mapStateToProps)(SingleCampus);