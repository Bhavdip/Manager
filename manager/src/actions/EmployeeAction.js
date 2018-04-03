import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED } from './types';

export const actionOnEmployeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const actionOnEmployeeCreate = ({ name, phone, shift }) => {
  //bring a auth
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({
        name,
        phone,
        shift
      })
      .then(() => {
        employeeCreated(dispatch);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const employeeCreated = dispatch => {
  dispatch({
    type: EMPLOYEE_CREATED
  });
  Actions.main({ type: 'reset' });
};
