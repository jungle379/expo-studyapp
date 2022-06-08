import * as React from "react";
import { Button, View, Text } from "react-native";

export function PostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 60, margin: 40 }}>投稿が完了しました！</Text>
      <Button
        title="メインページへ"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}
