import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home';
// import NavBar from './navbar';
import AllStudents from './AllStudents';
import SingleStudent from './singlestudent';
import AllCampuses from './AllCampuses';
import SingleCampus from './singlecampus';
import {connect} from 'react-redux';
// import reducer from '../reducers/index';
import { getAllCampuses } from '../reducers/campuses';
import { getAllStudents } from '../reducers/students';


class App extends Component {

  componentDidMount() {
    this.props.getAllCampuses();
    this.props.getAllStudents();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path="/students"
            render= {() => <AllStudents students= {this.props.students} />} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          
        </Switch>
      </Router>


    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    getAllCampuses: () => {
      dispatch(getAllCampuses());
  },
    getAllStudents: () => {
      dispatch(getAllStudents());
    }
});

const mapState = state => ({
  students: state.students
});

export default connect(mapState, mapDispatchToProps)(App);

// <Route path="/campuses/:campusId" component={SingleCampus} />
// <Route path="/students/studentId" component={SingleStudent} /> 