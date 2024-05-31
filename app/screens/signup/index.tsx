import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/components/BackButton'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FINTRACK_AUTH } from '@/firebaseConfig';

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (email && password) {
      await createUserWithEmailAndPassword(FINTRACK_AUTH, email, password);
    } else {
      alert("You must have both email and password to sign up!")
    }
  }
  return (
    <View className="h-full justify-between">
      <View className="flex mx-4 mt-6">
        <View>
          <View className="absolute z-10">
            <BackButton />
          </View>
          <Text className="text-2xl font-bold text-[#6200EE] text-center">Sign Up</Text>
        </View>

        <View className="flex-row justify-center my-3 mt-5">
          <Image source={require('../../../assets/images/fintrack-logo.png')} className="h-80 w-80"/>
        </View>

        <View className="space-y-2 mx-2">
          <Text className="text-lg font-bold">Email</Text>
          <TextInput value={email} autoCapitalize="none" placeholder="user@mail.com" onChangeText={value => setEmail(value)} className="p-4 bg-white rounded-full mb-3"/>
          <Text className="text-lg font-bold">Password</Text>
          <TextInput value={password} autoCapitalize="none" secureTextEntry placeholder="Write a strong password" onChangeText={value => setPassword(value)} className="p-4 bg-white rounded-full mb-3"/>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={handleSignUp}className="my-6 rounded-full p-3 shadow-sm mx-2 bg-[#6200EE]">
          <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}