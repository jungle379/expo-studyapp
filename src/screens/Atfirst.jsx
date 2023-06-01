import * as React from "react";
import { View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function AtfirstScreen({ navigation }) {
  return (
    <>
      <Header />
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingRight: 40,
          paddingTop: 20,
          backgroundColor: "lightgreen",
        }}
      >
        <Text>
          馬券は基本、単複勝負 上位人気から勝ち馬を見抜いて勝負する
          穴馬が好走するローカル競馬場は避ける
          損益を考えて、深みにハマる自滅は防ぐ
          近走の結果より、血統・バイアスを重視 重賞より、条件戦で稼ぐ
          騎手・競馬場の特徴も認識の上、予想する
        </Text>
      </View>
      <Footer />
    </>
  );
}
