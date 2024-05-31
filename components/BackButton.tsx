import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white rounded-full h-8 w-8">
        <Entypo name="chevron-left" size={30} color="#6200EE" />
    </TouchableOpacity>
  )
}