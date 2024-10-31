import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import React, { useState } from "react";

function Calculator() {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const updateVariable1 = (variable) => {
    setVar1(Number(variable));
  };

  const updateVariable2 = (variable) => {
    setVar2(Number(variable));
  };

  const handleCalculateButton = () => {
    if (operation === "+") {
      setResult(var1 + var2);
    } else if (operation === "-") {
      setResult(var1 - var2);
    } else if (operation === "*") {
      setResult(var1 * var2);
    } else if (operation === "/") {
      if (var2 == 0) {
        setResult("Cant Divide by Zero");
      } else {
        setResult(var1 / var2);
      }
    } else {
      setResult("Invalid Operation");
    }
  };

  const handleResetButton = () => {
    setVar1("");
    setVar2("");
    setResult("");
    setOperation("");
  };

  return (
    <View style={styles.main_container}>
      <View>
        <Text style={styles.heading}>React-Native Calculator App</Text>
        <Text style={styles.subheading}>
          A simple calculator for basic operations
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.input_captions}>Enter Your 1st Number:</Text>
        <TextInput
          keyboardType="numeric"
          value={var1}
          style={styles.input}
          onChangeText={updateVariable1}
        />
        <Text style={styles.input_captions}>Enter Your 2nd Number:</Text>
        <TextInput
          keyboardType="numeric"
          value={var2}
          style={styles.input}
          onChangeText={updateVariable2}
        />
        <Text style={styles.input_captions}>Enter Operation (+, -, *, /):</Text>
        <TextInput
          keyboardType="default"
          value={operation}
          style={styles.input}
          onChangeText={setOperation}
          maxLength={1}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Calculate"
          onPress={handleCalculateButton}
          color="#4CAF50"
        />
        <Button title="Reset" onPress={handleResetButton} color="#F44336" />
      </View>

      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#e0f7fa",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 10,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    color: "#004d40",
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  input_captions: {
    fontSize: 16,
    color: "#004d40",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 18,
    color: "black",
    borderColor: "#4db6ac",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f1f1f",
    marginTop: 20,
    textAlign: "center",
  },
});

export default Calculator;


