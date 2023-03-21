import {Platform} from 'react-native';
export const getCrossPlatformShadowStyle = () => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: 'rgba(0,0,0,0.1)',
      shadowOffset: {height: 4, width: -2},
      shadowRadius: 2,
      shadowOpacity: 0.4,
    };
  } else if (Platform.OS === 'android') {
    return {
      shadowColor: 'rgba(0,0,0,0.1)',
      elevation: 3,
      shadowOffset: {height: 4, width: -2},
    };
  }
};
