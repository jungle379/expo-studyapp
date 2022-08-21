import * as React from "react";
import { Button, View, Text } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItem: "flex-start",
          paddingTop: 20,
          backgroundColor: "lightpink",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "green" }}>
          Expo_study_app
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingRight: 40,
          paddingTop: 20,
          backgroundColor: "lightpink",
        }}
      >
        <Text style={{ paddingRight: 30, fontSize: 20 }}>Let's Log_in!! →</Text>
        <Button
          title="サインイン"
          onPress={() => navigation.navigate("SignIn")}
        />
        <Text style={{ padding: 20 }}></Text>
        <Button title="ログイン" onPress={() => navigation.navigate("LogIn")} />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightpink",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello World!!</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "lightpink",
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
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "lightpink",
        }}
      >
        <Text style={{ justifyContent: "center", fontSize: 20, marginTop: 20 }}>
          footer
        </Text>
      </View>
    </>
  );
}
