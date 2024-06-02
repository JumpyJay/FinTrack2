import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { FINTRACK_AUTH } from "@/firebaseConfig";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ProfileScreen = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const userProfile = {
    name:
      user == null
        ? "User is Null"
        : user.displayName == undefined
        ? "John Doe"
        : user.displayName,
    email: user == null ? "User is Null" : user.email,
    avatar: "https://via.placeholder.com/150",
  };

  const futureImplementation = () => {
    alert("Look forward to this in Milestone 2");
  };

  const handleDeleteProfile = () => {
    alert("Coming Soon!");
  };

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleLogOut = async () => {
    await signOut(FINTRACK_AUTH);
    navigation.navigate("Welcome");
  };

  return (
    <View className="flex-1">
      <ScrollView className="grow">
        <TouchableOpacity
          onPress={futureImplementation}
          className="flex-row items-center justify-between px-8 pt-6 pb-4 mb-3 bg-white"
        >
          <View className="flex-row">
            <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
            <View className="px-4 mt-1">
              <Text className="text-xl font-bold">{userProfile.name}</Text>
              <Text className="text-[#777]">View Profile</Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Email and Password</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Saved</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <View className="px-8 py-1">
          <Text className="text-l text-gray-400 font-bold">APP OPTIONS</Text>
        </View>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Passcode</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Notifications</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <View className="px-8 py-1">
          <Text className="text-l text-gray-400 font-bold">OTHERS</Text>
        </View>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Contact Support</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Refer a Friend</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">FAQ</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">Privacy & Security</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={futureImplementation}
          className="px-8 py-2 mb-0.5 bg-white flex-row justify-between"
        >
          <Text className="text-xl">About FinTrack</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <View className="mb-3 px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Version</Text>
          <Text className="text-xl">0.0.1</Text>
        </View>
        <TouchableOpacity
          onPress={handleDeleteProfile}
          className="mb-3 px-4 py-2 bg-white items-center"
        >
          <Text className="text-xl font-bold text-red-600">Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogOut}
          className="mb-3 px-4 py-2 bg-white items-center"
        >
          <Text className="text-xl font-bold text-[#6620EE]">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
