import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FINTRACK_AUTH } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';

const ProfileScreen = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150',
  };

  const handleEditProfile = () => {
    // Handle edit profile action
    console.log('Edit Profile Pressed');
  };

  const navigation = useNavigation();
  const handleLogOut = async () => {
    await signOut(FINTRACK_AUTH);
    navigation.navigate("Welcome")
  }

  return (
    <View className="flex-1">
      <ScrollView className="grow">
        <TouchableOpacity className="flex-row items-center px-8 py-4 mb-3 bg-white">
          <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
          <View className="flex-col px-12">
            <Text className="text-2xl font-bold">{userProfile.name}</Text>
            <Text className="px-1.5" style={styles.email}>{userProfile.email}</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Email and Password</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Saved</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <View className="px-8 py-1">
          <Text className="text-xl text-gray-700">APP OPTIONS</Text>
        </View>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Passcode</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Notifications</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <View className="px-8 py-1">
          <Text className="text-xl text-gray-700">OTHERS</Text>
        </View>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Contact Support</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Refer a Friend</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">FAQ</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Privacy & Security</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">About FinTrack</Text>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <View className="mb-3 px-8 py-2 bg-white flex-row justify-between">
          <Text className="text-xl">Version</Text>
          <Text className="text-xl">0.0.1</Text>
        </View>
        <TouchableOpacity className="mb-3 px-4 py-2 bg-white items-center">
          <Text className="text-xl font-bold text-red-600">Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogOut} className="mb-3 px-4 py-2 bg-white items-center">
          <Text className="text-xl font-bold text-[#6620EE]">Log Out</Text>
        </TouchableOpacity> 
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
