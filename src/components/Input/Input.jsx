import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../Theme/Colors';
import { spacing } from '../../Theme/Spacing';

export default function Input({ placeholder, secureTextEntry }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      placeholderTextColor={colors.black}
      style={styles.textInput}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: colors.darkgray,
    borderBottomWidth: 1,
    padding: spacing[2],
    marginHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
});
