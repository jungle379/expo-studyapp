import * as React from "react";
import { Button, View, Text } from "react-native";
import { Image } from "react-native-svg";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingRight: 40,
          marginTop: 20,
        }}
      >
        <Text style={{ padding: 20 }}></Text>
        <Button
          title="サインイン"
          onPress={() => navigation.navigate("SignIn")}
        />
        <Text style={{ padding: 20 }}></Text>
        <Button title="ログイン" onPress={() => navigation.navigate("LogIn")} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
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
      <View>
        <Image source={require("./../../image/image.png")} />
      </View>
    </>
  );
}
