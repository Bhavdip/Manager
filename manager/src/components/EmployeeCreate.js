import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label={'Name'} hint={'Jane'} />
        </CardSection>
        <CardSection>
          <Input label={'phone'} hint={'555-555-555'} />
        </CardSection>
        <CardSection>
          <Input label={'Name'} hint={'Jane'} />
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
