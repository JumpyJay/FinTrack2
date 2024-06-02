import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FINTRACK_AUTH } from "@/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/Loading";
import { setUserLoading } from "@/app/slices/user";
import { RootState } from "@/app/store";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(FINTRACK_AUTH, email, password);
        dispatch(setUserLoading(false));
      } catch (e) {
        dispatch(setUserLoading(false));
        alert("Invalid Email and Password");
      }
    } else {
      alert("Please Enter Email and Password");
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
            Sign In
          </Text>
        </View>

        <View className="flex-row justify-center my-3 mt-5">
          <Image
            source={require("../../../assets/images/fintrack-logo.png")}
            style={{resizeMode: 'contain'}} className="h-80 w-80"
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
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
          <TouchableOpacity className="flex-row justify-end">
            <Text>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {userLoading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={handleSignIn}
            className="my-6 rounded-full p-3 shadow-sm mx-2 bg-[#6200EE]"
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
