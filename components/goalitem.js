import { StyleSheet, View, Text } from "react-native";

export default function goalitem(){
    return(
        <View style={styles.goalitem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
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