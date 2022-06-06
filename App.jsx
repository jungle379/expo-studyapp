import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./src/screens/Main";
import { LogInScreen } from "./src/screens/LogIn";
import { SignInScreen } from "./src/screens/SignIn";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginTop: 20,
        marginRight: 40,
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
  );
}

function ResultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 60, margin: 40 }}>登録が完了しました！</Text>
      <Button
        title="メインページへ"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

function CreateScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ padding: 10 }}>タイトル</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:タイトルを入力してください"
        />
        <Text style={{ padding: 10 }}>内容</Text>
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
          title="投稿"
          onPress={() => navigation.navigate("Post")}
        ></Button>
        <Text style={{ margin: 10 }}></Text>
        <Button
          title="戻る"
          onPress={() => navigation.navigate("Main")}
        ></Button>
      </View>
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "MY APP",
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "サインインページ" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "登録完了画面" }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ title: "ログイン情報入力画面" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "メインページ" }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "新規投稿ページ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
