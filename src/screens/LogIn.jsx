import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";

export function LogInScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ padding: 10 }}>メールアドレス</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:tanaka@gmail.com"
        />
        <Text style={{ padding: 10 }}>パスワード</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:Tanaka123"
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ margin: 20 }}
          title="ログイン"
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={{ margin: 20 }}></Text>
        <Button title="ホームへ" onPress={() => navigation.navigate("Home")} />
      </View>
    </>
  );
}
