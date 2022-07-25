import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../../Theme/Colors';
import { spacing } from '../../Theme/Spacing';

export default function Button({ title, onPress, customStyles }) {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 165,
    height: 45,
    backgroundColor: colors.lightYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: spacing[3],
  },
});
