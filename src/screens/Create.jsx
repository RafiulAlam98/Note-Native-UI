import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Input from "../components/Input/Input";
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
        {noteColorOptions.map((option, index) => {
          const selected = noteColor === option;
          console.log(option);
          return (
            <Pressable
              style={styles.radioContainer}
              key={index}
              onPress={() => {
                setNoteColor(option);
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing[3],
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
