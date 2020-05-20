import React from 'react';
import {View, StyleSheet} from 'react-native';

export default ({style, ...props}) => (
  <View
    {...props}
    style={[styles.basic, props.centered && styles.centered, style]}
  />
);

const styles = StyleSheet.create({
  basic: {
    flexDirection: 'row',
  },
  centered: {
    justifyContent: 'center',
  },
});
