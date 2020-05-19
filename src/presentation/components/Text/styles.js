import {StyleSheet} from 'react-native';
import {primary, secondary, accented} from 'colors';

export default StyleSheet.create({
  basic: {
    fontSize: 14,
    color: primary,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  centered: {
    textAlign: 'center',
  },
  secondary: {
    color: secondary,
  },
  highlighted: {
    color: accented,
  },
  h1: {
    fontSize: 40,
    fontWeight: '800',
  },
  h2: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: '600',
  },
  h3: {
    fontSize: 20,
    marginTop: 15,
  },
  h6: {
    fontSize: 12,
  },
  logo: {
    fontWeight: '800',
  },
});
