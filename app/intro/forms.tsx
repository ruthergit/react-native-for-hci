import React, { useState } from "react";
import { Link, router } from "expo-router";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Forms = () => {
  const [name, setName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [backProblems, setBackProblems] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Tracks if terms are accepted
  const [showTermsModal, setShowTermsModal] = useState(false); // Controls the modal visibility

  const validateForm = () => {
    if (!name) {
      setError("Name is required.");
      return false;
    }
    if (!selectedGender) {
      setError("Please select your gender.");
      return false;
    }
    const ageNumber = Number(age);
    if (!age || isNaN(ageNumber) || ageNumber <= 0) {
      setError("Please enter a valid age.");
      return false;
    }
    if (!backProblems) {
      setError("Please select whether you have back/standing problems.");
      return false;
    }
    if (!termsAccepted) {
      setError("You must accept the terms and conditions to proceed.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setError(""); 
      if (backProblems === "yes") {
        router.push("/intro/DashboardForYes");
      } else {
        router.push("/intro/Dashboard");
      }
    } else {
      Alert.alert("Validation Failed", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Evaluation</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <View style={styles.main}>
        <View style={styles.child}>
          <Text style={styles.label}>Gender</Text>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue) => setSelectedGender(itemValue)}
            style={styles.pickerContainer}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            placeholder="Enter your age"
          />
        </View>
      </View>

      <Text style={styles.label2}>Do you have any back and standing problems?</Text>

      <View style={styles.main}>
        <View style={styles.child}>
          <TouchableOpacity
            style={[styles.button, backProblems === "yes" && styles.selectedButton]}
            onPress={() => setBackProblems("yes")}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.child}>
          <TouchableOpacity
            style={[styles.button, styles.noButton, backProblems === "no" && styles.selectedButton]}
            onPress={() => setBackProblems("no")}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => setShowTermsModal(true)}>
        <Text style={styles.termsLink}>Read Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.checkButton, termsAccepted && styles.selectedButton]}
        onPress={() => setTermsAccepted(!termsAccepted)}
      >
        <Text style={styles.buttonText}>
          {termsAccepted ? "Terms Accepted" : "Accept Terms and Conditions"}
        </Text>
      </TouchableOpacity>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonTextGo}>Let’s Go</Text>
      </TouchableOpacity>

      {/* Modal for Terms and Conditions */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showTermsModal}
        onRequestClose={() => setShowTermsModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>Terms and Conditions</Text>
              <Text style={styles.modalText}>
                {}
                The terms and conditions for the exercise app advise users to consult a healthcare professional before starting any workout and remind them to stop exercising if they experience discomfort. The app is not a substitute for medical advice, and users assume full responsibility for their health while using it. Personal data will be collected and protected according to privacy policies, and the app limits liability for any injuries or damages. Users must be over 60, and the app is for personal use only, with restrictions on misuse and commercial use. The terms may be updated, and legal matters will be governed by the specified jurisdiction.
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowTermsModal(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  buttonTextGo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#A1C6EA",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 43,
  },
  noButton: {
    backgroundColor: "#f1f1f1", // Grey color for No
  },
  selectedButton: {
    borderColor: "#000", // Border around selected button
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    height: 43,
    justifyContent: "center",
    fontSize: 20,
    padding: 10,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginBottom: 60,
  },
  child: {
    flex: 1,
    height: 50,
  },
  label: {
    fontSize: 24,
    marginBottom: 18,
    marginTop: 2,
  },
  label2: {
    fontSize: 24,
    marginBottom: 16,
    marginTop: 18,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#f1f1f1",
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 28,
    height: 54,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "left",
    padding: 28,
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
  },
  termsLink: {
    fontSize: 16,
    color: "black",
    // textDecorationLine: "underline",
    marginBottom: 10,
  },
  checkButton: {
    backgroundColor: "#A1C6EA",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    height: 43,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "#A1C6EA",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
