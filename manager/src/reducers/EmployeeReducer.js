//wiring up action types
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED, EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  employeesList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { props:'name', value: 'text' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATED:
      //only reset the state
      return INITIAL_STATE;
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employeesList: action.payload };
    default:
      return state;
  }
};
