import * as React from "react";
import { Button, View, Text } from "react-native";

export function Home2Screen({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItem: "flex-start",
          paddingTop: 20,
          backgroundColor: "lightblue",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "green" }}>
          Expo_study_app
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Text style={{ fontSize: 40 }}>Hello World!!</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "lightblue",
        }}
      >
        <Button
          title="新規投稿する"
          onPress={() => navigation.navigate("Create")}
        />
        <Button
          title="マイページへ"
          onPress={() => navigation.navigate("MyPage")}
        />
      </View>
    </>
  );
}
