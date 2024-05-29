import React from 'react';
import { View, Text, StyleSheet, Image, Button, SafeAreaView, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150',
  };

  const handleEditProfile = () => {
    // Handle edit profile action
    console.log('Edit Profile Pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.email}>{userProfile.email}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Profile Details</Text>
          {/* Add more profile details as needed */}
          <Text style={styles.detail}>Membership: Premium</Text>
          <Text style={styles.detail}>Joined: January 2023</Text>
          <Text style={styles.detail}>Total Spendings: $1500</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Edit Profile" onPress={handleEditProfile} color="#6200EE" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
