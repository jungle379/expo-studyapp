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
    </View>
  );
}

function SignInScreen() {
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
        placeholder="田中 太郎"
      />
      <Text style={{ padding: 10 }}>メールアドレス</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="tanaka@gmail.com"
      />{" "}
      <Text style={{ padding: 10 }}>パスワード</Text>
      <TextInput
        style={{
          width: "50%",
          height: "5%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
        placeholder="tanaka123"
      />
      <Text style={{ margin: 20 }}>登録する</Text>
      <Button
        title="登録する"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Text style={{ margin: 20 }}>ホームへ戻る</Text>
      <Button
        title="ホームへ戻る"
        onPress={() => navigation.navigate("HomeScreen")}
      />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
