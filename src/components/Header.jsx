import { Component } from "react";
import { View, Text } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <>
        <View
          style={{
            alignItem: "flex-start",
            // flex: 1,
            padding: 20,
            backgroundColor: "lightblue",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              paddingRight: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "right",
            }}
          >
            はじめに
          </Text>
        </View>
      </>
    );
  }
}
