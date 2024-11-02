import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("0");

  const handlePress = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearInputs();
    } else if (value === "ANS") {
      setInputValue(result.toString());
      setResult("");
    } else {
      setInputValue((prev) => prev + value);
    }
  };

  const calculate = () => {
    try {
      const evaluatedResult = eval(inputValue);
      setResult(evaluatedResult);
      setInputValue("");
    } catch (error) {
      setResult("Error");
      setInputValue("");
    }
  };

  const clearInputs = () => {
    setInputValue("");
    setResult("0");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter expression"
        value={inputValue}
        onChangeText={setInputValue}
        placeholderTextColor="#888"
      />
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonContainer}>
        {["1", "2", "3", " +"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {["4", "5", "6", "-"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {["7", "8", "9", "*"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {["0", "C", "=", "/", "ANS"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {["(", ")"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 60,
    borderColor: "#FC766AFF",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 24,
    backgroundColor: "#e0e0e0",
    marginBottom: 20,
    color: "#333",
  },
  resultText: {
    fontSize: 36,
    textAlign: "right",
    marginBottom: 20,
    color: "#FC766AFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FC766AFF",
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  zeroButton: {
    backgroundColor: "#FC766AFF",
    borderRadius: 10,
    padding: 15,
    flex: 2,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
});

export default App;