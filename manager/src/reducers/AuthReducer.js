import { EMAIL_CHANGED, PASSWORD_CHNAGED } from '../actions/types';

//Reducer is  fadurer function that return
// produce some amount of application state / array of data.

//Here is intial state object
const INITIAL_STATE = {
  email: '',
  password: ''
};

export const reducerLoginForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHNAGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
