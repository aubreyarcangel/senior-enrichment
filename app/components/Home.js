import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';


export default class Home extends Component {
  
  render() {
    return (
      <div>
        <AllCampuses />
      </div>
    );
  }
}
