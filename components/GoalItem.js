import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ data, deleteGoal }) => {
  const handleDelete = () => {
    deleteGoal(data.item);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#710644" }}
        onPress={handleDelete}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data.item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#e4d0ff",
  },
  goalText: {
    color: "#710644",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#9e0acc",
  },
});
