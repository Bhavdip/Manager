import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
