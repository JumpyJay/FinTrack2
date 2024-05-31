import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/components/BackButton'
import { useNavigation } from '@react-navigation/native';

export default function AddScreen() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const navigation = useNavigation();

  const handleAddTransaction = () => {
    if (category && description && date && amount) {
      console.log(category);
      console.log(description);
      console.log(date);
      console.log(amount);
      navigation.navigate("Main"); 
    } else {
      // Error
    }
  }
  return (
    <View className=" h-full justify-between">
      <View className="flex mx-4">
        <View>
          <View className="absolute z-10">
            <BackButton />
          </View>
          <Text className="text-xl font-bold text-[#6200EE] text-center">Add Transaction</Text>
        </View>

        <View className="flex-row justify-center my-3 mt-5">
          <Image source={require('../../../assets/images/fintrack-logo.png')} className="h-32 w-72"/>
        </View>

        <View className="space-y-2 mx-2">
          <Text className="text-lg font-bold">Category</Text>
          <TextInput value={category} placeholder="Write a category" onChangeText={value => setCategory(value)} className="p-4 bg-white rounded-full mb-3"/>
          <Text className="text-lg font-bold">Description</Text>
          <TextInput value={description} placeholder="Write a description" onChangeText={value => setDescription(value)} className="p-4 bg-white rounded-full mb-3"/>
          <Text className="text-lg font-bold">Date</Text>
          <TextInput value={date} placeholder="31/05/2024" onChangeText={value => setDate(value)} className="p-4 bg-white rounded-full mb-3"/>
          <Text className="text-lg font-bold">Amount</Text>
          <TextInput value={amount} placeholder="$10.00" onChangeText={value => setAmount(value)} className="p-4 bg-white rounded-full mb-3"/>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={handleAddTransaction}className="my-6 rounded-full p-3 shadow-sm mx-2 bg-[#6200EE]">
          <Text className="text-center text-white text-lg font-bold">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}