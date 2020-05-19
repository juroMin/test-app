import {StyleSheet} from 'react-native';
import {divider} from 'colors';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: divider,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'center',
  },
  iconSize: {
    width: 30,
    height: 30,
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 8,
  },
});
