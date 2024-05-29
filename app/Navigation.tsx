import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import HomeScreen from './screens/home';
import AddScreen from './screens/add';
import ProfileScreen from './screens/profile';
import LeaderboardScreen from './screens/leaderboard';
import TransactionsScreen from './screens/transactions';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
  
const AddStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddStack" component={AddScreen} />
    </Stack.Navigator>
);
  
const ProfileStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileStack" component={ProfileScreen} />
    </Stack.Navigator>
);
  
const LeaderboardStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LeaderboardStack" component={LeaderboardScreen} />
    </Stack.Navigator>
);
  
const TransactionsStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TransactionsStack" component={TransactionsScreen} />
    </Stack.Navigator>
);

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Leaderboard') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Transactions') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 0 }
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}} />
      <Tab.Screen name="Transactions" component={TransactionsStack} options={{headerShown: false}} />
      <Tab.Screen name="Add" component={AddStack} options={{headerShown: false}} />
      <Tab.Screen name="Leaderboard" component={LeaderboardStack} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default Navigation;
