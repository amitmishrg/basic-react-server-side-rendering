"use strict"
import {combineReducers} from 'redux';

import {counter} from './reducer/counter'

// Here combine the reducers
export default combineReducers({
  counter: counter,
});
