import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler=() => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    console.log('Goal input component rendered.')


    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <Image style={styles.image}
         source={require('../assets/images/goal.png')}
         />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor={"white"}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={'#f21282'}/>
            </View>
            <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={'#b180f0'} />
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
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        width: "100%",
        borderRadius: 6,
        padding: 16,
        color: "#120438",
      },
      buttonContainer: {
        marginTop: 10,
        flexDirection: 'row'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      }
}
);