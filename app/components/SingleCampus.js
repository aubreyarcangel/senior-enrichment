import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import EditCampusForm from './EditCampusForm';
import AddStudentForm from './AddStudentForm';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const SingleCampus = props => {
  const { campus } = props;
  let deleteCampus = props.deleteCampus;

    const loadingJSX = <h1>Loading...</h1>;
    return (
      <div>
        {campus ? (
          <div>
            <Card>
            <CardHeader
            avatar={campus.imageUrl}          
            />
            <CardMedia overlay={<CardTitle title={campus.name} />}>
              <img src={campus.imgUrl} height="500px" width="800" alt="" />
            </CardMedia>
            <CardText>
              <h3>Margaret Hamilton Interplanetary Academy of JavaScript Campus #{campus.id}</h3>
              <h3>{campus.description}</h3>
            </CardText>
            </Card>
            <ol>
              {
                campus.students.map(student => {
                  return <li key={student.id}>
                  <Link to={`/students/${student.id}`} >Name: {student.name}</Link></li>;
                })
              }
            </ol>
            <Link to={`/campuses/${campus.id}/update`}><button>UPDATE this Campus</button></Link>
            <AddStudentForm />
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
      return campus.id === Number(ownProps.match.params.id);
    })
  };
};

export default connect(mapStateToProps)(SingleCampus);
