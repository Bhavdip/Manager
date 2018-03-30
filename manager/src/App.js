import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD-FiSgTRt5Q2MQOP1ptR18NPfvNSkVuxw',
      authDomain: 'authenticationsample-12df0.firebaseapp.com',
      databaseURL: 'https://authenticationsample-12df0.firebaseio.com',
      projectId: 'authenticationsample-12df0',
      storageBucket: '',
      messagingSenderId: '292788396203'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
