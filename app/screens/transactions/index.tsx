import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
};

const transactionsData = [
  { id: "1", description: "Coffee", amount: -5, date: "2024-05-01" },
  { id: "2", description: "Groceries", amount: -30, date: "2024-05-02" },
  { id: "3", description: "Salary", amount: 2000, date: "2024-05-03" },
  { id: "4", description: "Rent", amount: -500, date: "2024-05-04" },
  { id: "5", description: "Dinner", amount: -50, date: "2024-05-05" },
];

const TransactionsScreen = () => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <View className="flex-row justify-between shadow-sm bg-white p-2">
      <View className="flex-col">
        <Text className="font-bold text-lg">{item.description}</Text>
        <Text className="font-sm">{item.date}</Text>
      </View>
      <Text className={`text-lg font-bold ${item.amount < 0 ? "text-red-600" : "text-green-600"}`}>
        ${Math.abs(item.amount).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white p-4">
        <Text className="font-bold text-3xl text-[#6200EE] text-center mb-2">Transactions</Text>
        <FlatList
          data={transactionsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionsScreen;