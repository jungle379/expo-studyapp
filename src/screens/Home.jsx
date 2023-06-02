import * as React from "react";
import { Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItem: "space-between",
          flexDirection: "row",
          padding: 20,
          backgroundColor: "lightblue",
          justifyContent: "space-between",
        }}
      >
        <Icon name="horse-head" size={50} />
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
      <View
        style={{
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
            fontSize: 20,
            marginTop: 20,
          }}
        >
          built in 2023
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "goldenrod",
          paddingTop: 20,
        }}
      >
        <Icon2 name="folderopen" size={50} />
      </View>
    </>
  );
}
