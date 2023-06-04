import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Footer({ navigation }) {
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
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "goldenrod",
          paddingTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Predict")}>
          <Icon name="edit" size={50} />
          <Text style={{ fontWeight: 700 }}>予想へ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Result")}>
          <Icon name="folderopen" size={50} />
          <Text style={{ fontWeight: 700 }}>結果確認へ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Mail")}>
          <Icon name="message1" size={50} />
          <Text style={{ fontWeight: 700 }}>メール連絡</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
