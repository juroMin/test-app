import React from 'react';
import {View, StyleSheet} from 'react-native';

export default ({style, ...props}) => (
  <View
    {...props}
    pointerEvents={props.pointerEvents || 'box-none'}
    style={[styles.basic, props.centered ? styles.centered : null, style]}
  />
);

const styles = StyleSheet.create({
  basic: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
