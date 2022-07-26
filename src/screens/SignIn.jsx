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
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input/Input';

export default function SignIn() {
  const onChangeText = text => {
    console.log(text);
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
          <Input placeholder="Email Address" />
          <Input placeholder="Password" secureTextEntry />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              customStyles={{ alignSelf: 'center', marginTop: 60 }}
              title="Login"
            />
            <Pressable
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              <Text
                preset="h4"
                style={{ color: colors.black, marginTop: spacing[3] }}
              >
                Don't have any account?{' '}
                <Text preset="h4" style={{ color: colors.blue }}>
                  Signup
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
});
