import { Box, FormControl, Input, NativeBaseProvider, ScrollView, VStack, Text, Button } from "@gluestack-ui/themed-native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AddScreen() {
    const [footnoteData, setFootnoteData] = React.useState("");
    const [amountData, setAmountData] = React.useState("0");

    const handleSave = () => {
        // Here you can handle the saving of data to your backend
        console.log("Amount:", amountData);
        console.log("Footnote:", footnoteData);
        // Resetting the form after save
        setAmountData("0");
        setFootnoteData("");
    };

    return (
        <NativeBaseProvider>
            <Text style={styles.title}>Add spendings</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <Box
                    width="95%"
                    heihgt="18%"
                    alignSelf="center"
                    bg="blue.300"
                    p={4} // Add padding for better visual
                    style={styles.box}
                >
                    <VStack width="90%" mx="3" maxW="300px">
                        <FormControl isRequired>
                            <FormControl.Label _text={{ bold: true }}>
                                Amount
                            </FormControl.Label>
                            <Input
                                placeholder="0"
                                keyboardType="numeric"
                                onChangeText={(value: any) => setAmountData(value)}
                                value={amountData}
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
                    width="95%"
                    height="18%"
                    alignSelf="center"
                    bg="blue.300"
                    p={4} // Add padding for better visual
                    style={styles.box}
                >
                    <VStack width="90%" mx="3" maxW="300px">
                        <FormControl isRequired>
                            <FormControl.Label _text={{ bold: true }}>
                                Footnote
                            </FormControl.Label>
                            <Input
                                placeholder="Description"
                                onChangeText={(value: any) => setFootnoteData(value)}
                                value={footnoteData}
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
                <Box margin={4} height="10%" width="95%">
                    <LinearGradient
                        colors={["rgba(110, 75, 244, 0.74)", "transparent"]}
                        style={styles.textgradient}
                    >
                        <Text style={styles.gradientText}>
                            Photo feature to be added
                        </Text>
                    </LinearGradient>
                </Box>
                <Button onPress={handleSave} style={styles.saveButton}>
                    Save
                </Button>
            </ScrollView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
        paddingTop: 10,
    },
    title: {
        fontSize: 22,
        alignSelf: "center",
        fontWeight: "bold",
        position: "absolute",
        top: "10%",
    },
    box: {
        marginTop: 20,
    },
    textgradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    gradientText: {
        fontWeight: "bold",
        color: "black",
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: "#6E4BF4",
    },
});
