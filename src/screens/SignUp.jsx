import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Text from '../components/Text/Text';
import { colors } from '../Theme/Colors';
import { spacing } from '../Theme/Spacing';
import Button from '../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input/Input';
import RadioInput from '../components/Input/RadioInput';

export default function SignUp() {
  const navigation = useNavigation();
  const genderOptions = ['Male', 'Female'];
  const [gender, setGender] = useState(null);
  const onChangeText = text => {
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ height: 30 }} />
        <View>
          <Input placeholder="Email Address" />
          <Input placeholder="Password" secureTextEntry />
          <Input placeholder="Full Name" />
          <Input placeholder="Age" />

          {genderOptions.map(option => {
            const selected = gender === option;
            return (
              <RadioInput
                selected={selected}
                setGender={setGender}
                option={option}
              />
            );
          })}

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              customStyles={{ alignSelf: 'center', marginTop: 60 }}
              title="Signup"
            />
            <Pressable
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <Text
                preset="h4"
                style={{ color: colors.black, marginTop: spacing[3] }}
              >
                Already have an account?{' '}
                <Text preset="h4" style={{ color: colors.blue }}>
                  Sign in
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
  container: {
    flex: 1,
    marginTop: spacing[3],
  },
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
