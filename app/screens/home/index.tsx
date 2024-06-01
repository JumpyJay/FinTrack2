import EmptyList from '@/components/EmptyList';
import { FINTRACK_AUTH } from '@/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const transactionsData = [
  { id: "1", description: "Coffee", amount: -5, date: "2024-05-01" },
  { id: "2", description: "Groceries", amount: -30, date: "2024-05-02" },
  { id: "3", description: "Salary", amount: 2000, date: "2024-05-03" },
  { id: "4", description: "Rent", amount: -500, date: "2024-05-04" },
  { id: "5", description: "Dinner", amount: -50, date: "2024-05-05" },
  { id: "6", description: "Grab Ride", amount: -100, date: "2024-05-04" },
  { id: "7", description: "Milk Tea with Pearl", amount: -10, date: "2024-05-05" },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleLogOut = async () => {
    await signOut(FINTRACK_AUTH);
    navigation.navigate("Welcome")
  }
  
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center bg-white p-4">
        <Text className="font-bold text-3xl shadow-sm text-[#6200EE]">FinTrack</Text>
        <TouchableOpacity onPress={handleLogOut} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image source={require('../../../assets/images/savings.png')} className="h-60 w-60" />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between">
          <Text className="font-bold text-xl">Recent Spendings</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Add")} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text>Add Transaction</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList 
            data={transactionsData}
            ListEmptyComponent={<EmptyList message={"You have not added any transactions"}/>}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadown-sm">
                  <View className="flex-row justify-between">
                  <View className="flex-col">
                  <Text className="font-bold text-lg">{item.description}</Text>
                  <Text className="font-sm">{item.date}</Text>
                  </View>
                    <Text className={`text-lg font-bold ${item.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                      ${Math.abs(item.amount).toFixed(2)}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </View>
  );
}