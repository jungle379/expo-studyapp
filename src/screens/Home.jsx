import * as React from "react";
import { Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItem: "flex-start",
          flexDirection: "row",
          padding: 20,
          backgroundColor: "lightblue",
        }}
      >
        <Icon name="horse-head" size={50} />
        <Button
          style={{
            fontSize: 15,
            paddingTop: 20,
            paddingRight: 20,
            paddingLeft: 200,
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
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "goldenrod",
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 15,
            marginTop: 20,
          }}
        >
          built in 2023
        </Text>
      </View>
    </>
  );
}
