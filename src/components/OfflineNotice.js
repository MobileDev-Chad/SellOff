import React from 'react';
import { View, StyleSheet } from 'react-native';
import  Constants  from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import { COLORS } from '../../constants';
import Text from './Text';

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}> No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: COLORS.white,
  },
});

export default OfflineNotice;
