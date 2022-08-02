import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Text from "../components/Text/Text";
import { colors } from "../Theme/Colors";
import { spacing } from "../Theme/Spacing";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/Images/empty-state.png")}
        />
        <Text preset="h4" style={styles.notetxt}>
          Never forget your notes
        </Text>
        <View style={{ height: 30 }} />
        <View>
          <Input
            onChangeText={(text) => setEmail(text)}
            placeholder="Email "
            autoCapitalize={"none"}
          />
          <Input
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry
          />
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {loading ? (
              <ActivityIndicator color="blue" size="large" />
            ) : (
              <Button
                customStyles={{ alignSelf: "center", marginTop: 60 }}
                title="Login"
                onPress={login}
              />
            )}

            <Pressable
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text
                preset="h4"
                style={{ color: colors.black, marginTop: spacing[3] }}
              >
                Don't have any account?{" "}
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
    textAlign: "center",
    textTransform: "uppercase",
  },
});
