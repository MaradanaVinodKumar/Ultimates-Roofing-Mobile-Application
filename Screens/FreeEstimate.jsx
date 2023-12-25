import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import roof from "../assets/AboutPageImages/roof.jpg";
import Footer from "../Components/Footer";
import { Dropdown } from "react-native-element-dropdown";

export default function FreeEstimate() {
  const data = [
    { label: "Residential Roofing", value: "ResidentialRoofing" },
    { label: "Commercial Roofing", value: "CommercialRoofing" },
    { label: "Siding", value: "Siding" },
    { label: "Gutters", value: "Gutters" },
    { label: "Windows", value: "Windows" },
    { label: "Others", value: "Others" },
  ];
  const [value, setValue] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gmail, setGmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !address ||
      !gmail ||
      !phoneNumber ||
      !service ||
      !city ||
      !zip ||
      !state ||
      !message === null
    ) {
      Alert.alert("Please fill out all required fields.");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted!");
    // You can access form data using the state variables (firstName, lastName, etc.)
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.sidePoint}>
        <TouchableOpacity>
          <MaterialIcons
            name="request-quote"
            size={34}
            color="white"
            onPress={() => {
              navigation.navigate("quote");
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.textAboveImage}>
            ULTIMATES ROOFING & SIDING
            <Text style={{ color: "red" }}>---------------</Text>
          </Text>
          <Text style={styles.textAboveImage2}>REQUEST A FREE ESTIMATE</Text>
          <Image source={roof} style={styles.roof} />
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your first name"
              onChangeText={setFirstName}
              value={firstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your last name"
              onChangeText={setLastName}
              value={lastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Email Address *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your Gmail"
              onChangeText={setGmail}
              value={gmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Phone Number *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your phone number"
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose a Service *</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select a service"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>City *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your city"
              onChangeText={setCity}
              value={city}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Zip Code *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your zip code"
              onChangeText={setZip}
              value={zip}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>State *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your state"
              onChangeText={setState}
              value={state}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address *</Text>
            <TextInput
              style={styles.input}
              // placeholder="Enter your address"
              onChangeText={setAddress}
              value={address}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Please feel free to add as much information as you like about your project. Detailed information will help us understand better."
              onChangeText={setMessage}
              value={message}
              multiline={true}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SEND MESSAGE</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  label: {
    color:'white'
  },
  sidePoint: {
    height: 60,
    width: 50,
    backgroundColor: "black",
    top: 380,
    right: 0,
    position: "absolute",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 11,
  },
  roof: {
    height: 200,
    backgroundColor: "rgba(30, 30, 42, 0.57)",
  },
  textAboveImage: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 50,
    marginLeft: 25,
    width: "100%",
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 65,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 20,
    backgroundColor: 'black',
    paddingVertical:30
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 14,
    color:'white'
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'white'
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
