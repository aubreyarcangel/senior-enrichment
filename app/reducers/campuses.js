import axios from 'axios';


// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const EDIT_CAMPUS = 'UPDATE_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';

//ACTION CREATORS
const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

export const createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus
  };
};

export const editCampus = (campus) => {
  return {
    type: EDIT_CAMPUS,
    campus
  };
};

export const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
};

// THUNK CREATORS

export const getAllCampuses = () => {
  return dispatch => {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
    .catch(console.error);
  };
};

export const removeCampus = (campus, props) => {
  return (dispatch) => {
    axios.delete(`/api/campuses/${campus.id}`)
    .then(res => res.data)
    .then(() =>
      dispatch(deleteCampus(campus))
      .catch(console.error));
    };
};

export const createNewCampus = (campus) => {
  return (dispatch) => {
    console.log(campus);
    axios.post('api/campuses', campus)
    .then(res => res.data)
    .then(campus => dispatch(createCampus(campus)))
    .catch(console.error);
  };
};

export const updateCampus = (updates, id) => {
  return (dispatch) => {
    return axios.put(`api/campuses/${id}`, updates)
    .then(res => res.data)
    .then(() => dispatch(getCampuses(campuses)))
    .catch(console.error);
  };
};

// REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    case EDIT_CAMPUS:
      const campusArr = state.filter(campus => action.campus.id !== campus.id);
      return [...campusArr, action.campus];
    case DELETE_CAMPUS:
      const delCampus = state.filter(state => campus.id !== action.campus.id);
      return delCampus;
    default:
      return state;
  }
};
