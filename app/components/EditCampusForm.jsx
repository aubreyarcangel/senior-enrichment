import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCampus} from '../reducers/campuses';

class EditCampusForm extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      imageUrl: '',
      campusDescription: '',
      isDirty: false
    };

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.imageChangeHandler = this.imageChangeHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  nameChangeHandler(event) {
    this.setState({campusName: event.target.value, isDirty: true})
  }

  imageChangeHandler(event) {
    this.setState({imageUrl: event.target.value, isDirty: true})
  }

  descriptionChangeHandler(event) {
    this.setState({campusDescription: event.target.value, isDirty: true})
  }

  submitHandler(event) {
    event.preventDefault()
    if (name) campusUpdate.campusName = campusName;
    if (image) campusUpdate.campusImage = campusImage;
    if (description) campusUpdate.campusDescription = campusDescription;
    console.log(updateCampus)    
    this.props.updateCampus(campusUpdate)
    this.props.updateCampus({ name: this.state.campusName, 
      imageUrl: this.state.imageUrl, 
      description: this.state.campusDescription });
  }

  render(){
    return (
      <div>
        <h3>Edit this Campus: </h3>
          <form onSubmit={this.submitHandler}>  
            <label>Name:
              <input type="text" 
                value={this.state.name} 
                onChange={this.nameChangeHandler} />
            </label>
            <label>Image:
              <input type="text" 
                value={this.state.image} 
                onChange={this.handleImageChange} />
            </label>
            <label>Campus Description: 
              <textarea
                value={this.state.description}
                onChange={this.descriptionChangeHandler}
                rows="3"
                cols="50" />
            </label>
              <input type="submit" value="Submit" />
          </form>
      </div>
    )
}

}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCampus: function(info) {dispatch(updateCampus(info));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampusForm);
