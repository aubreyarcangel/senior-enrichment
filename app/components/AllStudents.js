import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeStudent} from '../reducers/students';
import AddStudentForm from './AddStudentForm';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';


const AllStudents = props => {

  let students = props.students.sort((first, second) => first.id - second.id); // sort students by id number
  return (
    <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
              STUDENTS
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Students</TableHeaderColumn>
            <TableHeaderColumn>Campus</TableHeaderColumn>
            <TableHeaderColumn>Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {students.map(student => (
            <TableRow key={student.id}>
              <TableRowColumn>{student.id}</TableRowColumn>
              <TableRowColumn><Link to={`/students/${student.id}`} >{student.name}</Link></TableRowColumn>
              <TableRowColumn><Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link></TableRowColumn>
              <TableRowColumn>
              <FlatButton label="X" key={student.id} onClick={() => props.deleteStudent(student)} />
              </TableRowColumn>
            </TableRow>
          ))}
          </TableBody>
        </Table>
        <AddStudentForm />
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
   deleteStudent: (student) => dispatch(removeStudent(student, ownProps))};
  };

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
