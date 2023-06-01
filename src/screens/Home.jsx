import * as React from "react";
import { Button, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function HomeScreen({ navigation }) {
  return (
    <>
      <Header />
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingRight: 40,
          paddingTop: 20,
          backgroundColor: "lightgreen",
        }}
      >
        <Button
          title="はじめに"
          onPress={() => navigation.navigate("Atfirst")}
        />
      </View>
      <Footer />
    </>
  );
}
