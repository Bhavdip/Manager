import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './components/common';
import { actionOnEmailChange, actionOnPassChange, actionLoginUser } from './actions';

class LoginForm extends Component {
  componentWillMount() {}
  onEmailTextChange(text) {
    this.props.actionOnEmailChange(text);
  }

  onPasswordTextChange(passwordText) {
    this.props.actionOnPassChange(passwordText);
  }

  onLoginClickListener() {
    const { email, password } = this.props;
    this.props.actionLoginUser(email, password);
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner spinnerSize={'small'} />;
    }
    return (
      <Button
        onClickListener={this.onLoginClickListener.bind(this)}
        disabled={!this.props.isLoginEnable}
      >
        Login
      </Button>
    );
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
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <Text style={styles.errorTextStyle}>{this.props.message}</Text>
        <CardSection>{this.renderLoginButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  messageTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green'
  }
};

const mapStateToPros = globalState => {
  //global state of the all reducers.
  //console.log(globalState);
  //ownProps means this.props of the components
  //console.log(ownProps);

  //Destructuring Global State
  const { email, password, error, loading, message } = globalState.auth;

  // This will check if email address and password filed not empty
  const isLoginEnable = email !== '' && password !== '';

  return {
    email,
    password,
    error,
    isLoginEnable,
    loading,
    message
  };
};

export default connect(mapStateToPros, {
  actionOnEmailChange,
  actionOnPassChange,
  actionLoginUser
})(LoginForm);
