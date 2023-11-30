import { View, StyleSheet, FlatList, Button, Modal } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modal, setModal] = useState(true);
  const saveGoal = (text) => {
    setListOfGoals((goals) => [text, ...goals]);
  };
  const deleteGoal = (goalToDelete) => {
    setListOfGoals([...listOfGoals.filter((g) => g !== goalToDelete)]);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          onPress={() => setModal(true)}
          title="Add New Goal"
          color="purple"
        />
        <GoalInput
          visible={modal}
          saveGoal={saveGoal}
          closeModal={closeModal}
        />
        <View style={styles.goalContainer}>
          {/* <ScrollView>
          {listOfGoals.map((goal, idx) => (
            <View style={styles.goalItem} key={idx}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={listOfGoals}
            renderItem={(data) => {
              return <GoalItem data={data} deleteGoal={deleteGoal} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#de55ff",
  },
  goalContainer: {
    flex: 5,
  },
});
