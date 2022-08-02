import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/Text/Text";

export default function Home() {
  return (
    <SafeAreaView>
      <Text style={{ color: "red" }}>Home</Text>
    </SafeAreaView>
  );
}
