import * as React from "react";
import { Button, View, Text } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingRight: 40,
          backgroundColor: "lightgreen",
        }}
      >
        <Text style={{ padding: 20 }}></Text>
        <Button
          title="サインイン"
          onPress={() => navigation.navigate("SignIn")}
        />
        <Text style={{ padding: 20 }}></Text>
        <Button title="ログイン" onPress={() => navigation.navigate("LogIn")} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "lightblue",
          paddingRight: 80,
        }}
      >
        <Text></Text>
        <Button
          title="新規投稿する"
          onPress={() => navigation.navigate("Create")}
        />
        <Text></Text>
        <Button
          title="マイページへ"
          onPress={() => navigation.navigate("MyPage")}
        />
      </View>
    </>
  );
}
