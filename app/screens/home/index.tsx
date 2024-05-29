import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        
        {/* Summary Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <View style={styles.pieChart}>
            {/* Placeholder for Pie Chart */}
            <Ionicons name="pie-chart" size={100} color="#6200EE" />
          </View>
        </View>
        
        {/* Recent Transactions */}
        <View style={styles.transactionsContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>Coffee</Text>
            <Text style={styles.transactionAmount}>$5</Text>
          </View>
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>Groceries</Text>
            <Text style={styles.transactionAmount}>$30</Text>
          </View>
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>Rent</Text>
            <Text style={styles.transactionAmount}>$500</Text>
          </View>
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinksContainer}>
          <TouchableOpacity style={styles.quickLink}>
            <Text style={styles.quickLinkText}>Add Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink}>
            <Text style={styles.quickLinkText}>Set Budget</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink}>
            <Text style={styles.quickLinkText}>Add Goal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200EE',
  },
  chartContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pieChart: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  transactionsContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  quickLink: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  quickLinkText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
