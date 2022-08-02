import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "../../Theme/Colors";
import { spacing } from "../../Theme/Spacing";

export default function Input({
  placeholder,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
}) {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={colors.black}
      style={styles.textInput}
      autoCapitalize={autoCapitalize}
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
