import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import Colors from '../Utils/Colors'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    backgroundColor: {
        backgroundColor: Colors.primary
    }
})
