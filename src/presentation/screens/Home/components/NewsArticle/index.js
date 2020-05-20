import React, {useState, useEffect} from 'react';
import {View, Image, Animated} from 'react-native';
import {Text} from 'components';
import styles from './styles';

export default ({style, item}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  });

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}, style]}>
      <Image
        style={styles.image}
        source={{uri: item.multimedia[0].url}}
        resizeMode="contain"
      />
      <View style={styles.textPadding}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <Text h6 highlighted>
          News
        </Text>
      </View>
    </Animated.View>
  );
};
