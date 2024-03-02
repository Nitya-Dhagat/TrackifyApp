// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [abc, xyz] = useState("");
  const [courseGoals, newGoals] = useState([]);

  function handleText(enteredText) {
    xyz(enteredText);
  }

  function handleButton() {
    newGoals((coursegoalupdate) => [...coursegoalupdate, {text:abc,key:Math.random().toString()}]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          placeholder="Enter the task"
          style={styles.inputText}
          onChangeText={handleText}
        ></TextInput>
        <Button
          title="Add Goal "
          color={"#004b49"}
          onPress={handleButton}
        ></Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return(
              <View style={styles.goalitem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            ) ;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#88d8c0",
  },
  inputArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomWidth: 2,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  inputText: {
    width: "75%",
    borderWidth: 2,
    borderColor: "#184e77",
    padding: 10,
    borderRadius: 25,
    paddingLeft: 18,
    marginRight: 5,
  },
  listContainer: {
    flex: 5,
  },
  goalitem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#007474",
  },
  goalText: {
    color: "white",
    textAlign: "center",
  },
});
