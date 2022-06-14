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
          marginTop: 20,
          paddingRight: 40,
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
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ padding: 20 }}></Text>
        <Button
          title="マイページへ"
          onPress={() => navigation.navigate("MyPage")}
        />
        <Text style={{ padding: 20 }}></Text>
        <Button
          title="新規投稿する"
          onPress={() => navigation.navigate("Create")}
        />
      </View>
    </>
  );
}
