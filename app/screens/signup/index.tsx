import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FINTRACK_AUTH } from "@/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoading } from "@/app/slices/user";
import Loading from "@/components/Loading";
import { RootState } from "@/app/store";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(FINTRACK_AUTH, email, password);
        dispatch(setUserLoading(false));
      } catch (e) {
        dispatch(setUserLoading(false));
        alert("Email has already been signed up!");
      }
    } else {
      alert("You must have both Email and Password to sign up!");
    }
  };
  return (
    <View className="h-full bg-[#e0f7e9] justify-between">
      <StatusBar barStyle="light-content" />
      <View className="flex mx-4 mt-6">
        <View>
          <View className="absolute z-10">
            <BackButton />
          </View>
          <Text className="text-2xl font-bold text-[#6200EE] text-center">
            Sign Up
          </Text>
        </View>

        <View className="flex-row justify-center my-3 mt-5">
          <Image
            source={require("../../../assets/images/fintrack-logo.png")}
            className="h-80 w-80"
          />
        </View>

        <View className="space-y-2 mx-2">
          <Text className="text-lg font-bold">Email</Text>
          <TextInput
            value={email}
            autoCapitalize="none"
            placeholder="user@mail.com"
            onChangeText={(value) => setEmail(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
          <Text className="text-lg font-bold">Password</Text>
          <TextInput
            value={password}
            autoCapitalize="none"
            secureTextEntry
            placeholder="Write a strong password"
            onChangeText={(value) => setPassword(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
        </View>
      </View>

      <View>
        {userLoading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={handleSignUp}
            className="my-6 rounded-full p-3 shadow-sm mx-2 bg-[#6200EE]"
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
