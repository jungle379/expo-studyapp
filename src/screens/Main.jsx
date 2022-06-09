import * as React from "react";
import { Button, View, Text } from "react-native";

export function MainScreen({ navigation }) {
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
        <Text></Text>
        <Button
          title="マイページ"
          onPress={() => navigation.navigate("MyPage")}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text></Text>
        <Button
          title="投稿する"
          onPress={() => navigation.navigate("Create")}
        />
      </View>
    </>
  );
}
