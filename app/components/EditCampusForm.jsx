import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCampus} from '../reducers/campuses';

// couldn't get this to work

class EditCampusForm extends Component {
  constructor(props) {
    super();
    this.state = {
      campusName: '',
      campusPicture: '',
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
    this.setState({campusPicture: event.target.value, isDirty: true})
  }

  descriptionChangeHandler(event) {
    this.setState({campusDescription: event.target.value, isDirty: true})
  }

  submitHandler(event) {
    event.preventDefault()
    const {campusName, campusPicture, campusDescription} = this.state;
    const campusUpdate = {campusName, campusPicture, campusDescription}
    if (campusName) campusUpdate.campusName = campusName;
    if (campusPicture) campusUpdate.campusPicture = campusPicture;
    if (campusDescription) campusUpdate.campusDescription = campusDescription;
    this.props.updateCampus(campusUpdate)
  }

  render(){
    // console.log('state:');
    // console.log(this.state);
    const {campus} = this.props;
    console.log(this.props);
    console.log('campus:', campus);
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
                value={this.state.imgUrl} 
                onChange={this.imageChangeHandler} />
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


const mapStateToProps = ({ campuses, students }) => ({ campuses, students });

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCampus: function(info) {dispatch(props.updateCampus(campus, props.history));}
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditCampusForm);
