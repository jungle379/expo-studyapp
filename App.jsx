import * as React from "react";
import { Button, View, Text } from "react-native";
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
      <Text>ホームへ戻る</Text>
      <Button title="戻る" onPress={() => navigation.navigate("HomeScreen")} />
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
