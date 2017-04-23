import {combineReducers} from 'redux';

import * from plantsReducer from './plants';

export default combineReducers(Object.assign(
  plantsReducer,
))
