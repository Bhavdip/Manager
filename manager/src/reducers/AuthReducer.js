import {
  EMAIL_CHANGED,
  PASSWORD_CHNAGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER
} from '../actions/types';

//Reducer is  fadurer function that return
// produce some amount of application state / array of data.

//Here is intial state object
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  message: '',
  loading: false
};

export const reducerLoginForm = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHNAGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        loading: action.payload,
        error: '',
        message: ''
      };
    case CREATE_USER:
      return {
        ...state,
        ...INITIAL_STATE, //RESET THE STATE TO INITAL STATE
        message: 'Account has been created' //AND OVERRIDE THE MESSAGE WITH NEW STATE MESSAGE
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: '',
        message: ''
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false,
        message: ''
      };
    default:
      return state;
  }
};
