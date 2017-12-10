import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';
import AllStudents from './AllStudents';
import SingleStudent from './singlestudent';
import AllCampuses from './AllCampuses';
import SingleCampus from './singlecampus';
import AddCampusForm from './AddCampusForm';
import {connect} from 'react-redux';
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
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route exact path = "/" component={Home} />
                <Route exact path="/students"
                  render= {() => <AllStudents students= {this.props.students} />} />
                <Route exact path="/campuses" component={AllCampuses} />
                <Route exact path="/add-campus" component={AddCampusForm} />
                <Route path="/campuses/:id" component={SingleCampus} />
                <Route path="/students/:id" component={SingleStudent} />
            </Switch>
          </div>
        </div>
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
