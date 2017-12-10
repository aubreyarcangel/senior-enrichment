import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import campusReducer from './reducers/campuses';
import studentReducer from './reducers/students';


const rootReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer
});

const middleware = [thunkMiddleware, loggerMiddleware]
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
 