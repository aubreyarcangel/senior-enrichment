
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createCampus } from '../reducers/campuses';

// class AddCampusForm extends Component {

//   componentDidMount() {
//     this.props.setInput(this.props.campus)
//   }

//   render() {
//     const {
//       campusEntry,
//       label,
//       handleChange,
//       handleSubmit,
//       buttonText
//     } = this.props;
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>{label}</label>
//           <input
//             value={campusEntry.campusName}
//             onChange={handleChange}
//             type="text"
//             name="campusName"
//             placeholder="Enter campus name"
//           />
//           <input
//             value={campusEntry.campusDescription}
//             onChange={handleChange}
//             type="text"
//             name="campusDescription"
//             placeholder="Enter campus description"
//           />
//         </div>
//         <div>
//           <button type="submit">{buttonText}</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// const mapStateToProps = function (state, ownProps) {
// return {
//   campus: ownProps.campus,
//   campusEntry: state.campusEntry,
//   label: ownProps.label,
//   buttonText: ownProps.buttonText
// }
// };

// const mapDispatchToProps = function (dispatch, ownProps) {
// return {
//   setInput() {
//     if (ownProps.campus) {
//       dispatch(writeCampusName(ownProps.campus.name));
//       dispatch(writeCampusDescription(ownProps.campus.description));
//     } else {
//       dispatch(writeCampusName(''));
//       dispatch(writeCampusDescription(''));
//     }
//   },
//   handleChange (event) {
//     const input = event.target.value;
//     const field = event.target.name;
//     if (field === 'campusName') dispatch(writeCampusName(input));
//     if (field === 'campusDescription') dispatch(writeCampusDescription(input));
//   },
//   handleSubmit (event) {
//     event.preventDefault();
//     const name = event.target.campusName.value;
//     const description = event.target.campusDescription.value;
//     const campusId = ownProps.campus ? ownProps.campus.id : null;
//     dispatch(ownProps.postOrPut({ name, description }, campusId));
//     dispatch(writeCampusName(''));
//     dispatch(writeCampusDescription(''));
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);