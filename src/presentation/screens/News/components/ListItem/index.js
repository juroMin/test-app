import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import {Text} from 'components';

export default ({style, item, ...props}) => (
  <View {...props} style={[styles.container, style]}>
    <View>
      <Image
        resizeMode="cover"
        source={{uri: item.image}}
        style={styles.image}
      />
    </View>
    <Text highlighted style={styles.type}>
      {item.item_type}
    </Text>
    <Text h3 bold secondary>
      {item.title}
    </Text>
    <Text style={styles.subtitle}>{moment(item.date).format('MMM Do YY')}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  subtitle: {
    paddingTop: 10,
  },
  image: {
    minHeight: 200,
    minWidth: 200,
  },
  type: {
    marginTop: 10,
  },
});
