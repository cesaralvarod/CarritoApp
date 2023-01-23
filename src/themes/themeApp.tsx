import {Platform} from 'react-native';

export const themeApp = {
  statusBar: {
    bg: '#fff',
  },
  padding: {
    horizontal: 20,
    vertical: 20,
  },
  colors: {
    appBg: '#fff',
    textColor: '#000',
  },
  fontSizes: {
    small: 14,
    normal: 16,
    large: 20,
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Roboto',
      default: 'System',
    }),
  },
};
