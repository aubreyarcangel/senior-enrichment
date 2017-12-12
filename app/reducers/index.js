/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './students';
import campuses from './campuses';

// I couldn't get this to work so I just defined combineReducers in the store.js

const rootReducer = combineReducers({
  students,
  campuses
});

export default rootReducer
