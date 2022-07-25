import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';
import Home from './src/screens/Home';
import { colors } from './src/Theme/Colors';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/Fonts/Antonio-Medium.ttf'),
    'Spartan-Regular': require('./assets/Fonts/LeagueSpartan-Regular.ttf'),
    'Spartan-Bold': require('./assets/Fonts/LeagueSpartan-Bold.ttf'),
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const user = false;

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Create" component={Create} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
