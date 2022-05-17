import { StyleSheet, View } from 'react-native';
import React from 'react';

import { COLORS } from '../../../constants/theme';

export default ListItemSeperator = () => {
  const { seperator } = styles;
  return <View style={seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light,
  },
});
