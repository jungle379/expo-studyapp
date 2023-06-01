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
            style={{
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 15,
              marginTop: 20,
            }}
          >
            built in 2023
          </Text>
        </View>
      </>
    );
  }
}
