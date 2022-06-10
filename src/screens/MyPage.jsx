import * as React from "react";
import { Button, View, Text } from "react-native";

export function MyPageScreen({ navigation }) {
  return (
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
      <Text></Text>
      <Button title="投稿する" onPress={() => navigation.navigate("Create")} />
      <Text></Text>
      <Button title="戻る" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
