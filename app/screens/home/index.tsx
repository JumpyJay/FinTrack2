import EmptyList from '@/components/EmptyList';
import { FINTRACK_AUTH, transactionsRef } from '@/firebaseConfig';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

// const transactionsData = [
//   { id: "1", description: "Coffee", amount: -5, date: "2024-05-01" },
//   { id: "2", description: "Groceries", amount: -30, date: "2024-05-02" },
//   { id: "3", description: "Salary", amount: 2000, date: "2024-05-03" },
//   { id: "4", description: "Rent", amount: -500, date: "2024-05-04" },
//   { id: "5", description: "Dinner", amount: -50, date: "2024-05-05" },
//   { id: "6", description: "Grab Ride", amount: -100, date: "2024-05-04" },
//   { id: "7", description: "Milk Tea with Pearl", amount: -10, date: "2024-05-05" },
// ]; OLD

export default function HomeScreen() {
  const navigation = useNavigation();

  const {user} = useSelector(state => state.user);
  const [transactionsData, setTransactions] = useState([])

  const isFocused = useIsFocused();

  const fetchTransactions = async () => {
    const q = query(transactionsRef, where("userId", "==", user.uid))
    const querySnapShot = await getDocs(q);
    let data = [];
    querySnapShot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
    });
    setTransactions(data);
  };

  useEffect(() => {
    if (isFocused) fetchTransactions();
  },[isFocused])
  
  const handleLogOut = async () => {
    await signOut(FINTRACK_AUTH);
    navigation.navigate("Welcome");
  }
  
  return (
    <View className="flex-1 bg-[#6200EE]">
      <View className="flex-row justify-between items-center bg-[#6200EE] p-4">
        <Text className="font-bold text-3xl shadow-sm text-white">FinTrack</Text>
        <TouchableOpacity onPress={handleLogOut} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className="font-bold">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image source={require('../../../assets/images/savings.png')} className="h-60 w-60" />
      </View>
      <View className="px-4 space-y-3 rounded-xl mx-4 mb-4 py-4 bg-white">
        <View className="flex-row justify-between">
          <Text className="font-bold text-xl">Recent Spendings</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Add")} className="p-2 px-3 bg-[#6620EE] border border-gray-200 rounded-full">
            <Text className="text-white font-bold">Add Transaction</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 340}}>
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