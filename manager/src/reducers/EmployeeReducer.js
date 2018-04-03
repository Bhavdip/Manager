//wiring up action types
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { props:'name', value: 'text' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATED:
      //only reset the state
      return INITIAL_STATE;
    default:
      return state;
  }
};
