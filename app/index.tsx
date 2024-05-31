import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FINTRACK_AUTH } from "@/firebaseConfig";
import { User, onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./screens/login/login";
import Navigation from "./Navigation"; // Updated import

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FINTRACK_AUTH, (user) => {
      setUser(user);
    });
  }, []);
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={Navigation} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}