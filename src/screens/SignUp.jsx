import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { auth, db } from "../../App";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Text from "../components/Text/Text";
import { colors } from "../Theme/Colors";
import { spacing } from "../Theme/Spacing";

const genderOptions = ["Male", "Female"];

export default function SignUp() {
  const navigation = useNavigation();

  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    // create user with email and password
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // add user profile to the database
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        name: fullName,
        age: age,
        gender: gender,
        uid: result.user.uid,
      });
      setLoading(false);
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      setError(e);
      setLoading(false);
    }

    // navigate to authenticated screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <Input
            placeholder="Full Name"
            onChangeText={(text) => setFullName(text)}
            autoCapitalize={"words"}
          />
          <Input placeholder="Age" onChangeText={(text) => setAge(text)} />

          {genderOptions.map((option, index) => {
            const selected = gender === option;
            return (
              <Pressable
                style={styles.radioContainer}
                key={index}
                onPress={() => {
                  setGender(option);
                }}
              >
                <View
                  style={[
                    styles.outerCircle,
                    selected && styles.selectedOuterCircle,
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      selected && styles.selectedInnerCircle,
                    ]}
                  />
                </View>
                <Text style={{ color: colors.black, marginLeft: spacing[2] }}>
                  {option}
                </Text>
              </Pressable>
            );
          })}

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
                title="Submit"
                onPress={signup}
              />
            )}

            <Pressable
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text
                preset="h4"
                style={{ color: colors.black, marginTop: spacing[3] }}
              >
                Already have an account?{" "}
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
    textAlign: "center",
    textTransform: "uppercase",
  },
  textInput: {
    borderBottomColor: colors.darkgray,
    borderBottomWidth: 1,
    padding: spacing[2],
    marginHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
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
    borderColor: colors.orange,
  },
  selectedInnerCircle: {
    backgroundColor: colors.orange,
  },
});
