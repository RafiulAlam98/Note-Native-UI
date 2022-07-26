import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { spacing } from '../../Theme/Spacing';
import { colors } from '../../Theme/Colors';

export default function RadioInput({ option, setGender, selected }) {
  return (
    <Pressable
      style={styles.radioContainer}
      key={option}
      onPress={() => {
        setGender(option);
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
        {option}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing[4],
    marginVertical: 10,
  },
  outerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: colors.orange,
  },
  selectedInnerCircle: {
    backgroundColor: colors.orange,
  },
});
