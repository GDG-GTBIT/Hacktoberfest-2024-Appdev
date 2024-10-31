import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import React, { useState } from "react";

function Calculator() {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [result, setResult] = useState("");

  const updateVariable1 = (variable) => {
    setVar1(Number(variable));
  };

  const updateVariable2 = (variable) => {
    setVar2(Number(variable));
  };

  const handleCalculateButton = () => {
    setResult((var1) + (var2));
  };
  const handleResetButton = () => {
    setVar1("");
    setVar2("");
    setResult("");
  };

  return (
    <View style={styles.main_container}>
      <View>
        <Text style={styles.heading}>React-Native Calculator App</Text>
      </View>
      <View>
        <Text style={styles.subheading}>
          This is a simple addition calculator app
        </Text>
      </View>

      <View>
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
        <View style={styles.buttonContainer}>
          <Button
            title="Calculate"
            onPress={handleCalculateButton}
            color="green"
          />
          <Button title="Reset" onPress={handleResetButton} color="red" />
        </View>
      </View>
      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#f0f4f7",
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "600",
    color: "black",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "grey",
    fontStyle: "italic",
    marginBottom: 20,
  },
  input_captions: {
    fontSize: 14,
    color: "grey",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 18,
    color: "black",
    borderColor: "lightblue",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f1f1f",
    margin: 20,
  },
});

export default Calculator;

