import * as React from "react";
import { Button, View, Text } from "react-native";

export function MyPageScreen({ navigation }) {
  return (
    <View>
      <Text></Text>
      <Button title="投稿する" onPress={() => navigation.navigate("Create")} />
      <Text></Text>
      <Button title="戻る" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
