import React from 'react';
import {StyleSheet, View, StatusBar, FlatList} from 'react-native';
import {Divider, SafeAreaLayout, Header} from 'components';
import * as Colors from 'colors';
import {ListItem} from './components';
import customData from './data.json';

const ProductsScreen = () => {
  return (
    <View style={styles.body}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaLayout>
        <Header />
        <FlatList
          style={styles.list}
          scrollEventThrottle={20}
          showsVerticalScrollIndicator={false}
          data={customData}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={(_, index) => index}
        />
      </SafeAreaLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.appBackground,
  },
  list: {
    marginHorizontal: 20,
    marginBottom: 150,
  },
});

export default ProductsScreen;
