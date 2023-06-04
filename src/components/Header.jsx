import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Header({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          padding: 20,
          backgroundColor: "lightblue",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="horse-head" size={50} />
        </TouchableOpacity>
      </View>
    </>
  );
}
