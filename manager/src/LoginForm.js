import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './components/common';
import { actionOnEmailChange, actionOnPassChange } from './actions';

class LoginForm extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  onEmailTextChange(text) {
    this.props.actionOnEmailChange(text);
  }

  onPasswordTextChange(passwordText) {
    this.props.actionOnPassChange(passwordText);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            hint={'Enter Email Address'}
            onTextChangeListener={this.onEmailTextChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            hint={'Enter Password'}
            inputTypePassword
            onTextChangeListener={this.onPasswordTextChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button> Login </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToPros = globalState =>
  //global state of the all reducers.
  //console.log(globalState);
  //ownProps means this.props of the components
  //console.log(ownProps);
  ({
    email: globalState.auth.email,
    password: globalState.auth.password
  });

export default connect(mapStateToPros, { actionOnEmailChange, actionOnPassChange })(LoginForm);
