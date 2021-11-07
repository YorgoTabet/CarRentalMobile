import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Utils/Colors'

const Home = () => {
    return (
        <View style={styles.screen}>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary
    }
})
