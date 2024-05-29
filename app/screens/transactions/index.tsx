import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const transactionsData = [
  { id: '1', description: 'Coffee', amount: -5, date: '2024-05-01' },
  { id: '2', description: 'Groceries', amount: -30, date: '2024-05-02' },
  { id: '3', description: 'Salary', amount: 2000, date: '2024-05-03' },
  { id: '4', description: 'Rent', amount: -500, date: '2024-05-04' },
  { id: '5', description: 'Dinner', amount: -50, date: '2024-05-05' },
];

const TransactionsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDescriptionContainer}>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
      <Text
        style={[
          styles.itemAmount,
          { color: item.amount < 0 ? 'red' : 'green' },
        ]}
      >
        {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Transactions</Text>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemDescriptionContainer: {
    flexDirection: 'column',
  },
  itemDescription: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 14,
    color: '#777',
  },
  itemAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
