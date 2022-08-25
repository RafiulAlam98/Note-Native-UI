import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "../../Theme/Colors";
import { spacing } from "../../Theme/Spacing";

export default function Input({
  placeholder,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
  multiline,
}) {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={colors.grey}
      style={styles.textInput}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    margin: spacing[3],
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    marginHorizontal: spacing[4],
  },
});
