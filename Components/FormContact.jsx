import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "@expo/vector-icons/Ionicons";

export default function FormContact() {
  const data = [
    { label: "Residential Roofing", value: "ResidentialRoofing" },
    { label: "Commercial Roofing", value: "CommercialRoofing" },
    { label: "Siding", value: "Siding" },
    { label: "Gutters", value: "Gutters" },
    { label: "Windows", value: "Windows" },
    { label: "Others", value: "Others" },
  ];
  const [value, setValue] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gmail: "",
    phoneNumber: "",
    service: "",
    city: "",
    zip: "",
    state: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
    // You can send the form data to your server or perform any other actions
  };

  return (
    <ScrollView >

      <View style={[styles.container, { flexDirection: 'row', }]}>
        <View style={[styles.Contactbox, { marginRight: '4%' }]}>
          <Text style={styles.ContactboxTitle}>
            Call Us
          </Text>
          <Text style={styles.ContactboxText}>
            <Icon name="call" size={12} color={'#B22335'} />
            614-602-7980
          </Text>
        </View>
        <View style={styles.Contactbox}>
          <Text style={styles.ContactboxTitle}>

            Locate Us
          </Text>
          <Text style={styles.ContactboxText}>
            <Icon name="location" size={12} color={'#B22335'} />
            Columbus, Ohio
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View ><Text style={styles.fomeHead}>Reach Out to Us</Text></View>
        <View >
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.formLable, { width: '48%', marginRight: '4%' }]}>First Name *</Text>
            <Text style={styles.formLable}>Last Name*</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={[styles.input, { width: '48%', marginRight: '4%' }]}
              onChangeText={(text) => handleInputChange("firstName", text)}
            />
            <TextInput
              style={[styles.input, { width: '48%' }]}
              onChangeText={(text) => handleInputChange("lastName", text)}
            />
          </View>
        </View>

        <Text style={styles.formLable} >E-mail*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("gmail", text)}
        />

        <Text style={styles.formLable}>Phone Number*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.formLable}>Choose a Service *</Text>
        <Dropdown
          style={[styles.dropdown, {}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="  Select a service"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />

        <Text style={styles.formLable}>Address *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("address", text)}
        />
        <View >
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.formLable, { width: '48%', marginRight: '4%' }]}>City *</Text>
            <Text style={styles.formLable}>State *</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={[styles.input, { width: '48%', marginRight: '4%' }]}
              onChangeText={(text) => handleInputChange("city", text)}
            />
            <TextInput
              style={[styles.input, { width: '48%', marginRight: '4%' }]}
              onChangeText={(text) => handleInputChange("state", text)}
            />
          </View>
        </View>
        <Text style={styles.formLable}>Zip *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("zip", text)}
          keyboardType="numeric"
        />

        <Text style={styles.formLable}>Message</Text>
        <TextInput
          style={[styles.input, { height: 88 }]}
          multiline
          numberOfLines={8}
          onChangeText={(text) => handleInputChange("message", text)}
          placeholder="Please share detailed information about your project to help us understand better."

        />
        <View style={{ alignItems: 'center', }}>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>

            <Text style={{ color: '#F9F9F9', fontSize: 14, fontWeight: '400' }}>Submit</Text>

          </TouchableOpacity >
        </View>
      </View>
      <View style={{ marginBottom: 50 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 30,
    padding: 5,
    borderRadius: 2
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 30,
    padding: 6,
    paddingBottom: 14,
    paddingTop: 12,
    paddingLeft: 10,


  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,

  },
  fomeHead: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 50,
    color: '#181818'
  },
  formLable: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 5,
    color: '#181818'
  },
  submitButton: {
    backgroundColor: '#B22335',
    width: 175,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 13,
    alignItems: 'center',
    // marginBottom: 50
  },
  Contactbox: {
    width: "48%",
    height: 103,
    backgroundColor: '#F5CCD1',
    borderRadius: 4,
    padding: 20,
    paddingVertical: 20
  },
  ContactboxTitle: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.36,
    // marginBottom: 15
    lineHeight: 50
  }
  , ContactboxText: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.28,
    color: '#323539'
  }
});

