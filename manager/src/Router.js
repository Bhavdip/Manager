/* 
The purpose of this file is to have one location where I can 
define all the different scenes that user can navigate to.
All the differnt routes that user can navigate to.
*/

import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponet = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>
      <Scene key="main">
        <Scene
          key="employeelist"
          component={EmployeeList}
          title="Employee List"
          onRight={() => {
            Actions.employeeCreate();
          }}
          rightTitle={'Add'}
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponet;
