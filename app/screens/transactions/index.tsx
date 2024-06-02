import user from "@/app/slices/user";
import { RootState } from "@/app/store";
import EmptyList from "@/components/EmptyList";
import { transactionsRef } from "@/firebaseConfig";
import { useIsFocused } from "@react-navigation/native";
import { query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
};

// const transactionsData = [
//   { id: "1", description: "Coffee", amount: -5, date: "2024-05-01" },
//   { id: "2", description: "Groceries", amount: -30, date: "2024-05-02" },
//   { id: "3", description: "Salary", amount: 2000, date: "2024-05-03" },
//   { id: "4", description: "Rent", amount: -500, date: "2024-05-04" },
//   { id: "5", description: "Dinner", amount: -50, date: "2024-05-05" },
// ];

export default function TransactionsScreen() {
  const { user } = useSelector((state: RootState) => state.user);
  const [transactionsData, setTransactions] = useState([]);

  const isFocused = useIsFocused();

  const fetchTransactions = async () => {
    const q = query(transactionsRef, where("userId", "==", user.uid));
    const querySnapShot = await getDocs(q);
    // let data be of type any -> might need change later
    let data: any = [];
    querySnapShot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setTransactions(data);
    console.log(data);
  };

  useEffect(() => {
    if (isFocused) fetchTransactions();
  }, [isFocused]);

  return (
    <View className="flex-1">
      <View className="flex-1 bg-white p-2">
        <Text className="font-bold text-3xl text-[#6200EE] text-center mb-2">
          Transactions
        </Text>
        <FlatList
          data={transactionsData}
          ListEmptyComponent={
            <EmptyList message={"You have not added any transactions"} />
          }
          showsVerticalScrollIndicator={false}
          // item type to be any first -> may need to change later
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => {
            return (
              <View className="flex-row justify-between shadow-sm bg-white p-4">
                <View className="flex-col">
                  <Text className="font-bold text-lg">{item.description}</Text>
                  <Text className="font-sm">{item.date}</Text>
                </View>
                <Text
                  className={`text-lg font-bold ${
                    item.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  ${Math.abs(item.amount).toFixed(2)}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
