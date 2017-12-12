import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeCampus, createNewCampus} from '../reducers/campuses';
import AddCampusForm from './AddCampusForm'
import {GridList, GridTile} from 'material-ui/GridList';
import {IconButton, Subheader} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

// MaterialUI styles
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1200,
    height: 700,
    overflowY: 'auto'
  },
};


const AllCampuses = props => {
  let campuses = props.campuses;
  let students = props.students;
  let deleteCampus = props.deleteCampus;

  // I would like to move the campus.map() outside of the return to make it more modular
  return (
    <div>
    <AddCampusForm label={'+ ADD A CAMPUS +'}/>
      <div style={styles.root}>
      <GridList cellHeight={400} style={styles.gridList}>
        <Subheader>Campuses</Subheader>
        {campuses.map(campus => {
            return (
              <GridTile
                key={campus.id}
                title={campus.name}
                actionIcon={
                  <FlatButton label="Delete Campus" onClick={() => props.deleteCampus(campus)} />}>
                <Link to={`/campuses/${campus.id}`}><img src={campus.imgUrl} height="350" width= "650" /></Link>
              </GridTile>
        )})}
      </GridList>
      </div>
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
  