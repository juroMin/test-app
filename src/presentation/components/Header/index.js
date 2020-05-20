import React from 'react';
import {View, Image} from 'react-native';
import {Divider} from 'components';
import {logo} from 'assets';
import styles from './styles';

export default () => (
  <>
    <View style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
    </View>
    <Divider />
  </>
);
