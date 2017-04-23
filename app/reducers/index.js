import {combineReducers} from 'redux';
import * as plantsReducer from './plants';

export default combineReducers(Object.assign(
   plantsReducer,
));
