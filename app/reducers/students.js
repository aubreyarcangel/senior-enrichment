import axios from 'axios';


// Action Types
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'DELETE_STUDENT';
const EDIT_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const CHANGE_CAMPUS = 'CHANGE_CAMPUS';


//ACTION CREATORS
const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};

export const createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student
  };
};

export const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    student
  };
};

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student
  };
};

// THUNK CREATORS

export const getAllStudents = () => {
  return (dispatch) => {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
    .catch(console.error);
  };
};

export const removeStudent = (student, props) => {
  return (dispatch) => {
    axios.delete(`/api/students/${student.id}`)
    .then(() =>
      dispatch(deleteStudent(student))
      .catch(console.error));
    };
};

// REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    case EDIT_STUDENT:
      const studentArr = state.filter(student => action.student.id !== student.id);
      return [...studentArr, action.student];
    case DELETE_STUDENT:
      const delStudents = state.filter(state => student.id !== action.student.id);
      return delStudents;
    default:
      return state;
  }
};
