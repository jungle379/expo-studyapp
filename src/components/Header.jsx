import * as React from "react";
import { Button, View, Text } from "react-native";

const Header = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      marginTop: 20,
      paddingRight: 40,
    }}
  >
    <Text style={{ padding: 20 }}></Text>
    <Button title="サインイン" onPress={() => navigation.navigate("SignIn")} />
    <Text style={{ padding: 20 }}></Text>
    <Button title="ログイン" onPress={() => navigation.navigate("LogIn")} />
  </View>
);
export default Header;
