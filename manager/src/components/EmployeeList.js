import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  /*
  Called when the component may be receiving new props. 
  React may call this even if props have not changed, 
  so be sure to compare new and existing props 
  if you only want to handle changes.  
  */
  componentWillReceiveProps(nextProps) {
    //nextprops are the next set of props that this component
    //will be rendered with
    //this.props is still the old set of props.
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }
  renderRow(employeeItem) {
    return <ListItem emploee={employeeItem} />;
  }

  render() {
    console.log(this.props);
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = globalState => {
  console.log(globalState);
  const employees = _.map(
    globalState.employeeReudcer.employeesList,
    //that will retunr like map to array {name:'s', shift: 'monday', id:'-kuwuwuwuw83'}
    (val, uid) => ({ ...val, uid })
  );
  return {
    employees
  };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
