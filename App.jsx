import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogInScreen } from "./src/screens/LogIn";
import { SignInScreen } from "./src/screens/SignIn";
import { ResultScreen } from "./src/screens/Result";
import { CreateScreen } from "./src/screens/Create";
import { PostScreen } from "./src/screens/Post";
import { MyPageScreen } from "./src/screens/MyPage";
import { HomeScreen } from "./src/screens/Home";

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
          name="Create"
          component={CreateScreen}
          options={{ title: "新規投稿ページ" }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{ title: "投稿完了ページ" }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ title: "マイページ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
