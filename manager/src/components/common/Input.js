import React from 'react';
import { View, Text, TextInput } from 'react-native';

//label is props
const Input = props => {
  const { containerStyle, labelStyle, inputStyle } = style;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        style={inputStyle}
        onChangeText={props.onTextChangeListener}
        placeholder={props.hint}
        secureTextEntry={props.inputTypePassword}
        value={props.value}
        autoCorrect={false}
      />
    </View>
  );
};

const style = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    color: '#000',
    height: 50,
    width: null,
    flex: 2,
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

export { Input };
