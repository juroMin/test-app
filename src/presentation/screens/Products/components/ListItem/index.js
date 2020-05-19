import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'components';

export default ({style, item, ...props}) => (
  <View {...props} style={[styles.container, style]}>
    <Text h3>{item.title}</Text>
    <Text style={styles.subtitle}>{item.description}</Text>
    <Text style={styles.subtitle}>
      {item.price} {'   '}
      {item.url}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  subtitle: {
    paddingTop: 10,
  },
});
