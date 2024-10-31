import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import React, { useState } from "react";

function Calculator() {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const updateVariable1 = (variable) => {
    setVar1(variable);
  };

  const updateVariable2 = (variable) => {
    setVar2(variable);
  };

  const handleCalculateButton = () => {
    const num1 = Number(var1);
    const num2 = Number(var2);
    if (operation === "+") {
      setResult(num1 + num2);
    } else if (operation === "-") {
      setResult(num1 - num2);
    } else if (operation === "*") {
      setResult(num1 * num2);
    } else if (operation === "/") {
      if (num2 === 0) {
        setResult("Can't Divide by Zero");
      } else {
        setResult(num1 / num2);
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
        <Text style={styles.input_captions}>Select Operation:</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Add"
            color={operation === "+" ? "green" : "orange"}
            onPress={() => setOperation("+")}
          />
          <Button
            title="Subtract"
            color={operation === "-" ? "green" : "orange"}
            onPress={() => setOperation("-")}
          />
          <Button
            title="Multiply"
            color={operation === "*" ? "green" : "orange"}
            onPress={() => setOperation("*")}
          />
          <Button
            title="Divide"
            color={operation === "/" ? "green" : "orange"}
            onPress={() => setOperation("/")}
          />
        </View>
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
