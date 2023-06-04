import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/Home";
import { AtfirstScreen } from "./src/screens/Atfirst";
import { Mail } from "./src/screens/mail";
import { Result } from "./src/screens/result";
import { Predict } from "./src/screens/Predict";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ホームページ",
          }}
        />
        <Stack.Screen
          name="Atfirst"
          component={AtfirstScreen}
          options={{
            title: "はじめに",
          }}
        />
        <Stack.Screen
          name="Mail"
          component={Mail}
          options={{
            title: "連絡ページ",
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: "結果確認ページ",
          }}
        />
        <Stack.Screen
          name="Predict"
          component={Predict}
          options={{
            title: "予想確認ページ",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
