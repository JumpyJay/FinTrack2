import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// Work in Progress.

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
        <View className="h-full flex justify-around">
            <View className="flex-row justify-center mt-10">
                <Image source={require('../../../assets/images/fintrack-logo.png')} className="h-96 w-96 shadow" />
            </View>
            <View className="mx-5 mb-20">
                <Text className="text-center font-bold text-4xl mb-10">FinTrack</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")} className="p-3 rounded-full bg-purple-400 mb-5">
                    <Text className="text-center text-white text-lg font-bold">Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")} className="p-3 rounded-full bg-purple-400">
                    <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}