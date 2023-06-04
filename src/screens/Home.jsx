import * as React from "react";
import { Button, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Footer from "../components/Footer";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItems: "space-between",
          flexDirection: "row",
          padding: 20,
          backgroundColor: "lightblue",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="horse-head" size={50} />
        </TouchableOpacity>
        <Button
          style={{
            fontSize: 15,
            paddingTop: 20,
            paddingRight: 20,
            fontWeight: "bold",
            color: "black",
            textAlign: "right",
          }}
          title="はじめに"
          onPress={() => navigation.navigate("Atfirst")}
        />
      </View>
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
      ></View>
      <Footer navigation={navigation} />
    </>
  );
}
