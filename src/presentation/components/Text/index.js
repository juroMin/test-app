import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export default ({style, ...props}) => (
  <Text
    {...props}
    style={[
      styles.basic,
      props.bold && styles.bold,
      props.centered && styles.centered,
      props.logo && styles.logo,
      props.h1 && styles.h1,
      props.h2 && styles.h2,
      props.h3 && styles.h3,
      props.h6 && styles.h6,
      style,
    ]}
  />
);
