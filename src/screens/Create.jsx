import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Input from "../components/Input/Input";
import RadioInput from "../components/Input/RadioInput";
import Text from "../components/Text/Text";
import { colors } from "../Theme/Colors";
import { spacing } from "../Theme/Spacing";

const noteColorOptions = ["red", "green", "blue"];
export default function Create() {
  const [noteColor, setNoteColor] = useState("blue");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
