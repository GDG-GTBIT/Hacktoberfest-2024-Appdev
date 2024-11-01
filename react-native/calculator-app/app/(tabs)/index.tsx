import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import React, { useState } from "react";

function Calculator() {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [operate, setOperate] = useState("");
  const [result, setResult] = useState("0");

  const updateVariable1 = (variable) => {
    setVar1(variable);
  };

  const updateVariable2 = (variable) => {
    setVar2(variable);
  };

  const ContinousCalculation = (val) => {
    setVar1(String(val));
    setVar2("");
  };

  const HandleAdd = () => {
    setOperate("+");
    setResult(Number(var1) + Number(var2));
    ContinousCalculation(Number(var1) + Number(var2));
  };

  const HandleSubtraction = () => {
    setOperate("-");
    setResult(Number(var1) - Number(var2));
    ContinousCalculation(Number(var1) - Number(var2));
  };

  const HandleMultiplication = () => {
    setOperate("*");
    setResult(Number(var1) * Number(var2));
    ContinousCalculation(Number(var1) * Number(var2));
  };

  const HandleDivision = () => {
    setOperate("/");
    if (var2 === "0" || var2 === "") {
      setResult("Can't divide by zero");
    } else {
      setResult(Number(var1) / Number(var2));
      ContinousCalculation(Number(var1) / Number(var2));
    }
  };

  const handleClear = () => {
    setVar2("");
    setResult("");
    setOperate("");
  };

  const handleClearAll = () => {
    setVar1("");
    setVar2("");
    setOperate("");
    setResult("0");
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
        <Text style={styles.input_captions}>
          {result == "0" ? "Enter 1st Number" : "Previous Result"}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={var1}
          style={styles.input}
          onChangeText={updateVariable1}
        />
        <Text style={styles.input_captions}>Enter Your Next Number:</Text>
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
            color={operate == "+" ? "green" : "orange"}
            onPress={HandleAdd}
          />
          <Button
            title="Subtract"
            color={operate == "-" ? "green" : "orange"}
            onPress={HandleSubtraction}
          />
          <Button
            title="Multiply"
            color={operate == "*" ? "green" : "orange"}
            onPress={HandleMultiplication}
          />
          <Button
            title="Divide"
            color={operate == "/" ? "green" : "orange"}
            onPress={HandleDivision}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Clear" onPress={handleClear} color="#F44336" />
        <Button title="Clear All" onPress={handleClearAll} color="#F44336" />
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
