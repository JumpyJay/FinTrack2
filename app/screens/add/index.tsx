import {
    Box,
    FormControl,
    Input,
    NativeBaseProvider,
    ScrollView,
    VStack,
    Text,
    Button,
  } from "@gluestack-ui/themed-native-base";
  import React from "react";
  import { StyleSheet, SafeAreaView } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  
  const AddScreen = () => {
    const [footnoteData, setFootnoteData] = React.useState("");
    const [amountData, setAmountData] = React.useState("");
  
    const handleSave = () => {
      // Here you can handle the saving of data to your backend
      console.log("Amount:", amountData);
      console.log("Footnote:", footnoteData);
      // Resetting the form after save
      setAmountData("");
      setFootnoteData("");
    };
  
    return (
      <SafeAreaView className="flex-1">
        <NativeBaseProvider>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add spendings</Text>
            <Box
              width="100%"
              heihgt="18%"
              alignSelf="center"
              bg="white"
              style={styles.box}
            >
              <VStack width="95%" mx="3" mb="3">
                <FormControl isRequired>
                  <Text style={styles.formText}>Amount</Text>
                  <Input
                    placeholder="0"
                    keyboardType="numeric"
                    onChangeText={(value: any) => setAmountData(value)}
                    value={amountData}
                    style={styles.input}
                  />
                  <FormControl.HelperText _text={{ fontSize: "xs" }}>
                    Amount should be a numeric value.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                    Error Amount
                  </FormControl.ErrorMessage>
                </FormControl>
              </VStack>
            </Box>
            <Box
              width="100%"
              height="18%"
              alignSelf="center"
              bg="white"
              style={styles.box}
            >
              <VStack width="95%" mx="3">
                <FormControl isRequired>
                  <Text style={styles.formText}>Footnote</Text>
                  <Input
                    placeholder="Description"
                    onChangeText={(value: any) => setFootnoteData(value)}
                    value={footnoteData}
                    style={styles.input}
                  />
                  <FormControl.HelperText _text={{ fontSize: "xs" }}>
                    Footnote should contain at least 3 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                    Error Footnote
                  </FormControl.ErrorMessage>
                </FormControl>
              </VStack>
            </Box>
            <Box margin={4} height="30%" width="95%">
              <LinearGradient
                colors={["rgba(110, 75, 244, 0.74)", "transparent"]}
                style={styles.textgradient}
              >
                <Text style={styles.gradientText}>Photo feature to be added</Text>
              </LinearGradient>
            </Box>
            <Button onPress={handleSave} style={styles.saveButton}>
              Save
            </Button>
          </ScrollView>
        </NativeBaseProvider>
      </SafeAreaView>
    );
  };
  
  export default AddScreen;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    container: {
      flexGrow: 1,
      paddingTop: 15,
      padding: 20,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
    },
    title: {
      fontSize: 30,
      lineHeight: 36,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#6200EE",
    },
    formText: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 7,
    },
    box: {
      marginTop: 20,
    },
    input: {
      marginBottom: 5,
    },
    textgradient: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
    gradientText: {
      fontWeight: "bold",
      fontSize: 18,
      color: "black",
    },
    saveButton: {
      marginTop: 20,
      backgroundColor: "#6E4BF4",
    },
  });