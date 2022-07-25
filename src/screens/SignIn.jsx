import { View, SafeAreaView } from 'react-native';
import React from 'react';
import Text from '../components/Text/Text';
import { colors } from '../Theme/Colors';

export default function SignIn() {
  return (
    <SafeAreaView>
      <Text preset="h3" style={{ color: colors.darkOrange }}>
        SignIn
      </Text>
    </SafeAreaView>
  );
}
