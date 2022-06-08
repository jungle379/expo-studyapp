import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";

export function LogInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: 10 }}>メールアドレス</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:tanaka@gmail.com"
      />{" "}
      <Text style={{ padding: 10 }}>パスワード</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:tanaka123"
      />
      <Text style={{ margin: 20 }}>ログイン</Text>
      <Button
        title="ログイン！！"
        onPress={() => navigation.navigate("Main")}
      />
      <Text style={{ margin: 20 }}>ホームへ戻る</Text>
      <Button
        title="ホームへ戻る"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}