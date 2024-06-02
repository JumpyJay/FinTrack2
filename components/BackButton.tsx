import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function BackButton() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="bg-[#e0f7e9] rounded-full h-8 w-8"
    >
      <Entypo name="chevron-left" size={30} color="#6200EE" />
    </TouchableOpacity>
  );
}
