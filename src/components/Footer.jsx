import { Component } from "react";
import { View, Text } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: "goldenrod",
          }}
        >
          <Text
            style={{ justifyContent: "center", fontSize: 20, marginTop: 20 }}
          ></Text>
        </View>
      </>
    );
  }
}
