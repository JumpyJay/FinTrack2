import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FINTRACK_AUTH } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import BottomNavigation from "./BottomNavigation"; // Updated import
import WelcomeScreen from "./screens/welcome";
import AddScreen from "./screens/add";
import SignInScreen from "./screens/signin";
import SignUpScreen from "./screens/signup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./slices/user";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  onAuthStateChanged(FINTRACK_AUTH, u => {
    console.log("got user:", u);
    dispatch(setUser(u))
  })

  if (user) {
    return (
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomNavigation} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    ); 
  } else {
    return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{presentation: 'modal'}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{presentation: 'modal'}} />
        <Stack.Screen name="Main" component={BottomNavigation} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    );
  }
}