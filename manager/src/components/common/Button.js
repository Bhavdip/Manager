/* @flow weak */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = props => {
  const { containerStyle, buttonStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={props.onClickListener}
        disabled={props.disabled}
      >
        <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1
  },
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
