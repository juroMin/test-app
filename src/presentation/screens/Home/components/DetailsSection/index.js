import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'components';
import styles from './styles';

export default ({style, heading, text, source}) => (
  <View style={style}>
    {source && (
      <View style={styles.circle}>
        <Image resizeMode="cover" source={source} style={styles.image} />
      </View>
    )}
    <Text centered bold h3 style={styles.mainMargins}>
      {heading}
    </Text>
    <Text style={[styles.text, styles.mainMargins]}>{text}</Text>
  </View>
);
