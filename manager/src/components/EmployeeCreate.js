import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { actionOnEmployeeUpdate, actionOnEmployeeCreate } from '../actions';

class EmployeeCreate extends Component {
  componentWillMount() {}

  onSubmitPress() {
    const { name, phone, shift } = this.props;
    this.props.actionOnEmployeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Name'}
            hint={'Jane'}
            value={this.props.name}
            onTextChangeListener={paramText => {
              this.props.actionOnEmployeeUpdate({
                prop: 'name',
                value: paramText
              });
            }}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'phone'}
            hint={'555-555-555'}
            value={this.props.phone}
            onTextChangeListener={paramText => {
              this.props.actionOnEmployeeUpdate({
                prop: 'phone',
                value: paramText
              });
            }}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            style={{ flex: 1 }}
            onValueChange={value => {
              this.props.actionOnEmployeeUpdate({
                prop: 'shift',
                value
              });
            }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onClickListener={this.onSubmitPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: 'center'
  }
};

const mapStateToProps = globalState => {
  const { name, phone, shift } = globalState.employeeReudcer;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  actionOnEmployeeUpdate,
  actionOnEmployeeCreate
})(EmployeeCreate);
