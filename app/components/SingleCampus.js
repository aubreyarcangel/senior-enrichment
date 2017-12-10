import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

function SingleCampus(props) {
  const { campus } = props;
  

  return campus
  ? (
    <div>
      <Link to={`/campuses/${campus.id}/edit-campus`}>Edit</Link>
      <ul>
        <li>Selected Campus: {campus.name}</li>
        <li>Description: {campus.description}</li>
      </ul>
      <img src={`${campus.imgUrl}`} />
    </div>
  )
  : <h1>Loading...</h1>
}

function mapStateToProps(state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: state.campuses.find(campus => campus.Id === campusId)
  };
}

export default connect(mapStateToProps)(SingleCampus)