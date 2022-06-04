import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>サインインページへ</Text>
      <Button
        title="サインインする"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Text>ログインページへ</Text>
      <Button
        title="ログインする"
        onPress={() => navigation.navigate("LogIn")}
      />
    </View>
  );
}

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: 10 }}>ニックネーム</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:田中 太郎"
      />
      <Text style={{ padding: 10 }}>メールアドレス</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:tanaka@gmail.com"
      />{" "}
      <Text style={{ padding: 10 }}>パスワード</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:tanaka123"
      />
      <Text style={{ margin: 20 }}>登録する</Text>
      <Button title="登録する" onPress={() => navigation.navigate("Result")} />
      <Text style={{ margin: 20 }}>ホームへ戻る</Text>
      <Button
        title="ホームへ戻る"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
function ResultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>登録が完了しました！</Text>
      <Button
        title="メインページへ"
        onPress={() => navigation.navigate("Index")}
      />
    </View>
  );
}
function LogInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: 10 }}>メールアドレス</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:tanaka@gmail.com"
      />{" "}
      <Text style={{ padding: 10 }}>パスワード</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="例:tanaka123"
      />
      <Text style={{ margin: 20 }}>ログイン</Text>
      <Button
        title="ログイン！！"
        onPress={() => navigation.navigate("Index")}
      />
      <Text style={{ margin: 20 }}>ホームへ戻る</Text>
      <Button
        title="ホームへ戻る"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function IndexScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>メインページ</Text>
    </View>
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
          options={{ title: "MY APP" }}
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
          name="Index"
          component={IndexScreen}
          options={{ title: "メインページ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
