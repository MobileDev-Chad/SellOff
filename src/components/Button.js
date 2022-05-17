import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { COLORS, SIZES } from '../../constants/theme';

export default AppButton = ({ title, onPress, color = 'primary' }) => {
  const { button, text } = styles;

  return (
    <TouchableOpacity
      style={[button, { backgroundColor: COLORS[color] }]}
      onPress={onPress}
    >
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding * 1.5,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
