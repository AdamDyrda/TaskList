import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.individualGoal}>
      <Pressable
        android_ripple={{ color: "#" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  individualGoal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    textAlign: "justify",
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: "#162935",
  },
});
