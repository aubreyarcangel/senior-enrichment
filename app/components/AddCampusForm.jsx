import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createNewCampus} from '../reducers/campuses';

class CampusAddForm extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      campusPicture: '',
      campusDescription: '',
      clickedbutton: false,
      isDirty: false
    };

    // I got a little carried away with the length of these function names
    this.campusNameChangeHandler = this.campusNameChangeHandler.bind(this);
    this.campusPictureChangeHandler = this.campusPictureChangeHandler.bind(this);
    this.campusDescriptionChangeHandler = this.campusDescriptionChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  campusNameChangeHandler(event) {
    this.setState({campusName: event.target.value, isDirty: true});
  }

  campusPictureChangeHandler(event) {
    this.setState({campusPicture: event.target.value, isDirty: true});
  }

  campusDescriptionChangeHandler(event) {
    this.setState({campusDescription: event.target.value, isDirty: true});
  }

  // shows/hides form
  clickHandler() {
    this.setState({clickedbutton: !this.state.clickedbutton});
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.createCampus({ name: this.state.campusName, imgUrl: this.state.campusPicture, description: this.state.campusDescription });
    this.setState({campusName: '', campusPicture: '', campusDescription: '', isDirty: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>+ ADD NEW CAMPUS</button>
      {this.state.clickedbutton ?
        (
        <div>
          <form id="new-campus-form" onSubmit={this.submitHandler}>
            <div>
              <label>Campus Name: </label>
              <input
                value={this.state.campusName}
                onChange={this.campusNameChangeHandler}
                type="text"
                placeholder="Campus Name:" />
              <label>Campus Photo: </label>
              <input
                value={this.state.campusPicture}
                onChange={this.campusPictureChangeHandler}
                type="url"
                placeholder="Campus Photo:" />
              <label>Campus Description: </label>
              <textarea
                value={this.state.campusDescription}
                onChange={this.campusDescriptionChangeHandler}
                rows="3"
                cols="50"
                placeholder="Description:">stuff here</textarea>
              <span>
                <button type="submit">Submit!</button>
              </span>
            </div>
          </form>
        </div>) : (<div />)
      }
  </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCampus: function(info) {dispatch(createNewCampus(info));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusAddForm);
