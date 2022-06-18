import * as React from "react";
import { Button, View, Text } from "react-native";

export function PostScreen({ navigation }) {
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
      <View
        style={{ flex: 2, alignItems: "center", justifyContent: "flex-start" }}
      >
        <Text style={{ fontSize: 60, marginBottom: 10 }}>
          投稿が完了しました！
        </Text>
        <Text style={{ fontSize: 60, margin: 40 }}></Text>
        <Button
          title="メインページへ"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </>
  );
}
