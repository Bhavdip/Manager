import { EMPLOYEE_UPDATE } from './types';

export const actionOnEmployeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const actionOnEmployeeCreate = ({ name, phone, shift }) => ({
  type: 'ss'
});
