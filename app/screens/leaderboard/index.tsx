import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Leaderboard = {
  id: string;
  name: string;
  points: number;
}

const leaderboardData = [
  { id: '1', name: 'Alice', points: 1500 },
  { id: '2', name: 'Bob', points: 1200 },
  { id: '3', name: 'Charlie', points: 1100 },
  { id: '4', name: 'David', points: 1000 },
  { id: '5', name: 'Eve', points: 900 },
];

const LeaderboardScreen = () => {
  const renderItem = ({ item }: {item: Leaderboard }) => (
    <View className="flex-row justify-between mb-3">
      <Text className="text-lg font-bold">{item.name}</Text>
      <Text className="text-lg font-bold">{item.points} pts</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4 bg-white">
        <Text className="font-bold text-3xl text-center mb-2 text-[#6200EE] mb-2">Leaderboard</Text>
        <View className="bg-white p-4 h-4/5">
          <FlatList
            data={leaderboardData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;