import { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

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
          <Icon name="horse-head" size={50} />
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
