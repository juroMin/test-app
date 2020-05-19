import React from 'react';
import {View, StyleSheet} from 'react-native';
import {divider} from 'colors';

export default ({style}) => {
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: divider,
  },
});
