import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHNAGED } from './types';

//action creator
//action is plain javascript object
//it always have Type properties and payload.
export const actionOnEmailChange = text => {
  console.log(`actionOnEmailChange=${text}`);
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const actionOnPassChange = passwordText => {
  console.log(`actionOnPassChange=${passwordText}`);
  return {
    type: PASSWORD_CHNAGED,
    payload: passwordText
  };
};

/**
 * This will first make the Asychnornous call to firebase
 * Then based on response it will act the action.
 *
 * @param {*} user
 * @param {*} password
 */
export const actionLoginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
    });
};
