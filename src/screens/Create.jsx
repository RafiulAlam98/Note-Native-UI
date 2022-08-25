import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { db } from "../../App";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import RadioInput from "../components/Input/RadioInput";
import Text from "../components/Text/Text";
import { colors } from "../Theme/Colors";
import { spacing } from "../Theme/Spacing";

const noteColorOptions = ["red", "green", "blue"];
export default function Create({ navigation, route, user }) {
  const [noteColor, setNoteColor] = useState("blue");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onPressCreate = async () => {
    const docRef = await addDoc(collection(db, "notes"), {
      title: title,
      description: description,
      color: noteColor,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input placeholder="Title" onChangeText={(text) => setTitle(text)} />
        <Input
          multiline={true}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
        />
        <View style={{ marginTop: 25, marginBottom: 15 }}>
          <Text style={{ color: colors.darkgray, marginLeft: 30 }}>
            Select your note color
          </Text>
        </View>
        {noteColorOptions.map((option, index) => {
          console.log(option);
          return (
            <RadioInput
              key={index}
              label={option}
              value={noteColor}
              setValue={setNoteColor}
            />
          );
        })}

        <Button
          customStyles={{ alignSelf: "center", marginTop: 60 }}
          title="Submit"
          onPress={onPressCreate}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing[3],
  },
});
