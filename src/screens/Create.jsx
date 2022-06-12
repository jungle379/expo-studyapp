import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";

export function CreateScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ margin: 20, padding: 10 }}>タイトル</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="タイトルを入力してください"
        />
        <Text style={{ margin: 20, padding: 10 }}>内容</Text>
        <TextInput
          style={{
            width: "50%",
            height: "30%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="投稿する内容を入力してください"
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Button
          title="投稿する"
          onPress={() => navigation.navigate("Post")}
        ></Button>
        <Text style={{ margin: 10 }}></Text>
        <Button
          title="戻る"
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </View>
    </>
  );
}
