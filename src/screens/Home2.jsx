import * as React from "react";
import { Button, View } from "react-native";

export function Home2Screen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        Hello World!!
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "lightblue",
        }}
      >
        <Button
          title="新規投稿する"
          onPress={() => navigation.navigate("Create")}
        />
        <Button
          title="マイページへ"
          onPress={() => navigation.navigate("MyPage")}
        />
      </View>
    </>
  );
}
