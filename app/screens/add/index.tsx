import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import Loading from "@/components/Loading";
import { addDoc } from "firebase/firestore";
import { transactionsRef } from "@/firebaseConfig";
import { useSelector } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootState } from "@/app/store";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddScreen() {
  const [catoptions, setCatoptions] = useState([
    { label: "Groceries", value: "Groceries" },
    { label: "Transportation", value: "Transportation" },
    { label: "Housing", value: "Housing" },
    { label: "Utilities", value: "Utilities" },
    { label: "Entertainment", value: "Entertainment" },
  ]);

  const [catpickOpen, setCatpickopen] = useState(false);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [fulldate, setFulldate] = useState(new Date());
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleAddTransaction = async () => {
    if (category && description && fulldate && amount) {
      setLoading(true);
      let doc = await addDoc(transactionsRef, {
        category,
        description,
        date,
        amount,
        userId: user.uid,
      });
      setLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      alert("All fields must have inputs!");
    }
  };

  ///////////////////////////////////////////
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setFulldate(currentDate);
    setDate(currentDate.toDateString());
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  ///////////////////////////////////////////

  return (
    <View className="h-full bg-white justify-between">
      <View className="flex mx-4 mt-5">
        <View>
          <View className="absolute z-10">
            <BackButton />
          </View>
          <Text className="text-2xl font-bold text-[#6620EE] text-center">
            Add Transaction
          </Text>
        </View>

        <View className="flex-row justify-center my-3 mt-5">
          <Image
            source={require("../../../assets/images/fintrack-logo.png")}
            className="h-32 w-72"
          />
        </View>

        <View className="space-y-2 mx-2">
          <Text className="text-lg font-bold">Category</Text>
          <DropDownPicker
            placeholder="Select a category"
            placeholderStyle={{ color: "#b7b7ba", paddingLeft: 7 }}
            open={catpickOpen}
            value={category}
            items={catoptions}
            setOpen={setCatpickopen}
            setValue={setCategory}
            setItems={setCatoptions}
            style={{
              borderRadius: 25, // Rounded border for the picker
            }}
          />
          <Text className="text-lg font-bold">Description</Text>
          <TextInput
            value={description}
            placeholder="Write a description"
            placeholderTextColor="#b7b7ba"
            onChangeText={(value) => setDescription(value)}
            className="p-4 bg-white rounded-full mb-3 border"
          />
          <Text className="text-lg font-bold">Date</Text>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{
              padding: 16,
              backgroundColor: "white",
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
              marginBottom: 16,
            }}
          >
            <Text style={{ color: fulldate ? "#000" : "#b7b7ba" }}>
              {fulldate ? fulldate.toDateString() : "Select a date"}
            </Text>
          </TouchableOpacity>
          <SafeAreaView>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={fulldate}
                mode={undefined}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </SafeAreaView>
          <Text className="text-lg font-bold">Amount</Text>
          <TextInput
            value={amount}
            placeholder="$10.00"
            placeholderTextColor="#b7b7ba"
            onChangeText={(value) => setAmount(value)}
            className="p-4 bg-white rounded-full mb-3 border"
          />
        </View>
      </View>

      <View>
        {loading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={handleAddTransaction}
            className="my-6 rounded-full p-3 shadow-sm mx-2 bg-[#6200EE]"
          >
            <Text className="text-center text-white text-lg font-bold">
              Add
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
