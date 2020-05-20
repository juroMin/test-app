import React from 'react';
import {View, TouchableWithoutFeedback, Animated, Easing} from 'react-native';
import {SafeAreaLayout} from 'components';
import {SaveAreaInset} from 'enums';
import {primary, accented} from 'colors';
import styles from './styles';

export default ({state, descriptors, navigation}) => {
  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM} style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const TabIcon = options.tabBarIcon;
        let scaleValue = new Animated.Value(0);

        function scale() {
          scaleValue.setValue(0);
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.easeOutBack,
            useNativeDriver: false,
          }).start();
        }

        const onPress = () => {
          scale(scaleValue);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          scale(scaleValue);
          navigation.emit({type: 'tabLongPress', target: route.key});
        };

        const buttonScale = scaleValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.5, 1],
        });

        return (
          <View key={index} style={styles.tabContainer}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              style={styles.clickableArea}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Animated.View
                style={[styles.tab, {transform: [{scale: buttonScale}]}]}>
                <TabIcon
                  size={styles.iconSize}
                  marginVertical={2}
                  tintColor={isFocused ? accented : primary}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </SafeAreaLayout>
  );
};
