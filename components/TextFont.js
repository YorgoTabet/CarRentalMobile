import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextFont = (props) => {
    return (
        <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    )
}

export default TextFont

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat_400Regular',
        color: 'black',
    }
})
