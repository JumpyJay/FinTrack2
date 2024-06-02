import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function WelcomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View className="flex-1 justify-center items-center bg-[#e0f7e9]">
      <StatusBar barStyle="dark-content" />
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../../../assets/images/fintrack-logo.png")}
            style={{resizeMode: 'contain'}} className="h-48 w-96"
          />
        </View>
        <View className="mx-5 pb-20">
          <Text className="text-center font-bold text-4xl mb-10">FinTrack</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            className="p-3 rounded-full bg-purple-400 mb-5"
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="p-3 rounded-full bg-purple-400"
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
