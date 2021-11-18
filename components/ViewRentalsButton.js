import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../Utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ViewRentalsButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.eyeContainer}>
                {props.show ?
                    <Ionicons name='eye' size={25} /> :
                    <Ionicons name='eye-off' size={25} />
                }
            </View>
        </TouchableOpacity>
    )
}

export default ViewRentalsButton

const styles = StyleSheet.create({
    eyeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: Colors.secondary,
        borderRadius: 5,
        marginBottom: 5
    }
})

