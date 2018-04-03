import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHNAGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER
} from './types';

//Sychronous Action creator
//action creator
//action is plain javascript object
//it always have Type properties and payload.
export const actionOnEmailChange = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

/**
 * Sychronous Action creator
 *
 * @param {*} passwordText
 */
export const actionOnPassChange = passwordText => ({
  type: PASSWORD_CHNAGED,
  payload: passwordText
});

/**
 * This will first make the Asychnornous call to firebase
 * Then based on response it will act the action.
 *
 * @param {*} user
 * @param {*} password
 */
export const actionLoginUser = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: true
  });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      loginUserSuccess(dispatch, user);
    })
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          createdAccountSucess(dispatch, user);
        })
        .catch(error => {
          loginUserFail(dispatch, error.message);
        });
    })
    .catch(error => {
      loginUserFail(dispatch, error.message);
    });
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};

//helper method for login user action creator
//remember that we have not exported the function
//it is used by login user
const loginUserSuccess = (dispatch, user) => {
  //Manually dispatch an action
  //Manually dispatch an action
  //we only call this method when
  //we have Asynchronous call is completed
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const createdAccountSucess = (dispatch, nwUser) => {
  dispatch({
    type: CREATE_USER,
    payload: nwUser
  });
};
