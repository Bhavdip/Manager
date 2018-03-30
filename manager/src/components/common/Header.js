import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Header = props => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>{props.screenTitle}</Text>
    </View>
  );
};

//validation you can set here
Header.propTypes = {
  screenTitle: PropTypes.string.isRequired
};

const styles = {
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
