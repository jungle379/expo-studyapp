import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
export function SignInScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ padding: 10, margin: 10 }}>ニックネーム</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:田中 太郎"
        />
        <Text style={{ padding: 10, margin: 10 }}>メールアドレス</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:tanaka@gmail.com"
        />
        <Text style={{ padding: 10, margin: 10 }}>パスワード</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:tanaka123"
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
          title="登録する"
          onPress={() => navigation.navigate("Result")}
        />
        <Text style={{ margin: 20 }}></Text>
        <Button title="ホームへ" onPress={() => navigation.navigate("Home")} />
      </View>
    </>
  );
}
