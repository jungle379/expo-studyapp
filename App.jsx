import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

function SignInScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ padding: 10, margin: 10 }}>ニックネーム</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:田中 太郎"
        />
        <Text style={{ padding: 10, margin: 10 }}>メールアドレス</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:tanaka@gmail.com"
        />
        <Text style={{ padding: 10, margin: 10 }}>パスワード</Text>
        <TextInput
          style={{
            width: "50%",
            height: "5%",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="例:tanaka123"
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <Button
          title="登録する"
          onPress={() => navigation.navigate("Result")}
        />
        <Button title="ホームへ" onPress={() => navigation.navigate("Home")} />
      </View>
    </>
  );
}
function ResultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 60, margin: 40 }}>登録が完了しました！</Text>
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
      <Text>新規登録ページへ</Text>
      <Button
        title="新規登録へ"
        onPress={() => navigation.navigate("Create")}
      ></Button>
    </View>
  );
}

function CreateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>メインページへ</Text>
      <Button
        title="メインページへ"
        onPress={() => navigation.navigate("Create")}
      ></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "MY APP",
            // headerRight: () => (
            //   <Button
            //     title="サインイン"
            //     style={{ marginRight: 20 }}
            //     onPress={() => navigation.navigate("SignIn")}
            //   ></Button>
            // ),
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
          name="Index"
          component={IndexScreen}
          options={{ title: "メインページ" }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "新規登録ページ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
