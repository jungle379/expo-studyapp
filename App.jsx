import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormControl } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
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
      <Text>サインインしてください</Text>
      <FormControl.Label>
        メールアドレス
        <Input size="lg" variant="filled"></Input>
      </FormControl.Label>
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
