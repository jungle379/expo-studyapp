import * as React from "react";
import { View, Text, FlatList } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Item = [
  { id: 1, title: "馬券は基本、単複勝負" },
  { id: 2, title: "上位人気から勝ち馬を見抜いて勝負する" },
  { id: 3, title: "穴馬が好走するローカル競馬場は避ける" },
  { id: 4, title: "損益を考えて、深みにハマる自滅は防ぐ" },
  {
    id: 5,
    title: "近走の結果より、血統・バイアスを重視",
  },
  {
    id: 6,
    title: "重賞より、条件戦で稼ぐ",
  },
  { id: 7, title: "騎手・競馬場の特徴も認識の上、予想する" },
];

export function Result(navigation) {
  return (
    <>
      <Header navigation={navigation} />
      <View
        style={{
          flex: 3,
          // flexDirection: "row",
          alignItems: "flex-start",
          // justifyContent: "flex-end",
          paddingRight: 40,
          paddingLeft: 40,
          paddingTop: 30,
          backgroundColor: "lightgreen",
        }}
      >
        <FlatList
          data={Item}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingTop: 10 }}>
                <Text style={{ fontWeight: 700 }}>・{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
      <Footer navigation={navigation} />
    </>
  );
}
