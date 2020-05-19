import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'components';

export default ({style, item, ...props}) => (
  <TouchableOpacity
    {...props}
    pointerEvents={props.pointerEvents || 'box-none'}
    style={[styles.container, style]}>
    <Text h3>{item.title}</Text>
    <Text style={styles.subtitle}>{item.description}</Text>
    <Text style={styles.subtitle}>
      {item.price} {'   '}
      {item.url}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  subtitle: {
    paddingTop: 10,
  },
});
