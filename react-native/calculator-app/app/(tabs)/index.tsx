import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearInputs();
    } else {
      setInputValue((prev) => prev + value);
    }
  };

  const calculate = () => {
    const [num1, num2] = inputValue.split(operator).map(Number);
    let calculation;

    switch (operator) {
      case '+':
        calculation = num1 + num2;
        break;
      case '-':
        calculation = num1 - num2;
        break;
      case '*':
        calculation = num1 * num2;
        break;
      case '/':
        calculation = num2 !== 0 ? num1 / num2 : 'ERROR';
        break;
      default:
        return;
    }

    setResult(calculation.toString());
    setInputValue('');
    setOperator('');
  };

  const handleOperator = (op) => {
    if (inputValue) {
      setOperator(op);
      setInputValue((prev) => prev + op);
    }
  };

  const clearInputs = () => {
    setInputValue('');
    setResult('');
    setOperator('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonrow2}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperator('-')}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonrow3}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperator('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonrow4}>
        <View style={styles.zero}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperator('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: '#FC766AFF',
    borderWidth: 5,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "lightgrey",
    fontSize: 18,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 20,
    color: '#FC766AFF',
  },
  button: {
    backgroundColor: "#FC766AFF",
    borderRadius: 20,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    width: 85,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonrow2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonrow3: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonrow4: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 75,
  },
  zero: {
    width: 95,
  },
});

export default App;
