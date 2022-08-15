import * as React from "react";
import { Button, View, Text } from "react-native";

export function MyPageScreen({ navigation }) {
  return (
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
        title="ホームへ戻る"
        onPress={() => navigation.navigate("Home2")}
      />
    </View>
  );
}
