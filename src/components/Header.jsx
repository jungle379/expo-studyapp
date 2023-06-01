import { View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Atfirst({ navigation }) {
  return (
    <>
      <View
        style={{
          alignItem: "flex-start",
          flexDirection: "row",
          padding: 20,
          backgroundColor: "lightblue",
        }}
      >
        <Icon name="horse-head" size={50} />
        {/* <Button
          style={{
            fontSize: 15,
            paddingTop: 20,
            paddingRight: 20,
            paddingLeft: 200,
            fontWeight: "bold",
            color: "black",
            textAlign: "right",
          }}
          title="はじめに"
          onPress={() => navigation.navigate("Atfirst")}
        /> */}
      </View>
    </>
  );
}
