import { StyleSheet, View, Pressable, Text } from "react-native";

export default function GenerateNewNumber(){
    return (
        <View>
            <Pressable>
                <Text style={styles.textFont}>
                    Roll Dice
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    textFont:{
        color: '#0000FF',
        fontSize: 25
    },
    buttonContainer:{
        width: 20,
        height: 10,
    }
})