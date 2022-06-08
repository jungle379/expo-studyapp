import * as React from "react";
import { Button, View, Text } from "react-native";

export function MyPageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>新規投稿ページへ</Text>
      <Button title="投稿する" onPress={() => navigation.navigate("Create")} />
      <Text>ホームへ</Text>
      <Button title="戻る" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
