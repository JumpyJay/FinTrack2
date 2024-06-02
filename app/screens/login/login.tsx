import { FINTRACK_AUTH } from "@/firebaseConfig";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FINTRACK_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Login failed: " + error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      // alert("Check your emails");
      // implement email verification + conditional rendering so that does not
      //    straightaway redirect users to main app component upon signup
    } catch (error) {
      console.log(error);
      alert("Signup failed: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <GestureHandlerRootView>
        {/* username input field */}
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        {/* password input field */}
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true} // hide text entry
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button title="Login" onPress={() => signIn()} />
            <Button title="Create account" onPress={() => signUp()} />
          </>
        )}
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    marginTop: "70%", // change accordingly !!!
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 19,
    alignSelf: "center",
    fontWeight: "bold",
    paddingBottom: 9,
    // top: "10%", // Adjust this value to position the title (top), might check
    // with other (smaller) devices see whether an adjustment is necessary
  },
});