import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }
  render() {
    return (
      <View>
        <Text>Test tetstets</Text>
        <Text>Test tetstets</Text>
        <Text>Test tetstets</Text>
        <Text>Test tetstets</Text>
        <Text>Test tetstets</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
