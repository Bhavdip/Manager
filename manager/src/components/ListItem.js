import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  bindData(employee) {
    if (employee.name !== '') {
      return <Text style={styles.titleStyle}>{employee.name}</Text>;
    }
    return <Text style={styles.titleStyle}>unknow</Text>;
  }
  render() {
    return <CardSection>{this.bindData(this.props.employee)}</CardSection>;
  }
}

ListItem.propType = {
  employee: PropTypes.string.isRequired
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
