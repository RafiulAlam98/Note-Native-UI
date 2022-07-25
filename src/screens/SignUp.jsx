import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Text from '../components/Text/Text';
import { colors } from '../Theme/Colors';
import { spacing } from '../Theme/Spacing';
import Button from '../components/Button/Button';

export default function SignUp() {
  const onChangeText = text => {
    console.log(text);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={{ alignSelf: 'center' }}
          source={require('../../assets/Images/empty-state.png')}
        />
        <Text preset="h4" style={styles.notetxt}>
          Never forget your notes
        </Text>
        <View style={{ height: 30 }} />
        <View>
          <TextInput
            placeholder="Email Address"
            autoCorrect={false}
            placeholderTextColor={colors.black}
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
          />
          <TextInput
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor={colors.black}
            style={styles.textInput}
            secureTextEntry
            onChangeText={text => onChangeText(text)}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              customStyles={{ alignSelf: 'center', marginTop: 60 }}
              title="Sign In"
            />
            <Pressable>
              <Text
                preset="h4"
                style={{ color: colors.black, marginTop: spacing[3] }}
              >
                Don't have any account?{' '}
                <Text preset="h4" style={{ color: colors.blue }}>
                  Sign Up
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notetxt: {
    color: colors.lightgreen,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  textInput: {
    borderBottomColor: colors.darkgray,
    borderBottomWidth: 1,
    padding: spacing[2],
    marginHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
});
