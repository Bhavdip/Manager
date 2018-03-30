import { combineReducers } from 'redux';
import { reducerLoginForm } from './AuthReducer';

export default combineReducers({
  auth: reducerLoginForm
});
