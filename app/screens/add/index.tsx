import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/components/BackButton'
import { useNavigation } from '@react-navigation/native';
import Loading from '@/components/Loading';
import { addDoc } from 'firebase/firestore';
import { transactionsRef } from '@/firebaseConfig';
import { useSelector } from 'react-redux';

export default function AddScreen() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(state => state.user);
  const navigation = useNavigation();

  const handleAddTransaction = async () => {
    if (category && description && date && amount) {
      setLoading(true);
      let doc = await addDoc(transactionsRef, {
        category,
        description,
        date,
        amount,
        userId: user.uid
      });
      setLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      alert("All fields must have inputs!");
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
        {
          loading ? (
            <Loading />
          ) : (
            <TouchableOpacity onPress={handleAddTransaction}className="my-6 rounded-full p-3 shadow-sm mx-2 bg-[#6200EE]">
              <Text className="text-center text-white text-lg font-bold">Add</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}