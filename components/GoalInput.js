import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ saveGoal, visible, closeModal }) => {
  const [text, setText] = useState("");

  const handleChange = (enteredText) => {
    setText(enteredText);
  };
  const handleSubmit = () => {
    saveGoal(text);
    setText("");
    closeModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          onChangeText={handleChange}
          style={styles.textInput}
          placeholder="Your course goal"
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={handleSubmit} title="Add Goal" color="white" />
          </View>
          <View style={styles.button}>
            <Button onPress={closeModal} title="Cancel" color="white" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    borderRadius: 6,
    color: "#710644",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
  },
});
