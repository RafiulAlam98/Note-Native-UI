import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Theme/Colors";
import { spacing } from "../../Theme/Spacing";

export default function RadioInput({ key, label, value, setValue }) {
  const selected = value === label;
  return (
    <Pressable
      style={styles.radioContainer}
      key={key}
      label={label}
      value={value}
      onPress={() => {
        setValue(label);
      }}
    >
      <View
        style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
      >
        <View
          style={[styles.innerCircle, selected && styles.selectedInnerCircle]}
        />
      </View>

      <Text style={{ color: colors.black, marginLeft: spacing[2] }}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: spacing[4],
    marginVertical: 10,
  },
  outerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.grey,
    borderWidth: 1,
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  selectedOuterCircle: {
    borderColor: colors.lightRed,
  },
  selectedInnerCircle: {
    backgroundColor: colors.darkgray,
  },
});
