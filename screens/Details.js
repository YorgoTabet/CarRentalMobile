import React from 'react'
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native'
import Colors from '../Utils/Colors'

const Details = (props) => {
    const car = props.route.params.car[0]
    console.log(car);
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: car.image }}
                    style={{ height: '100%', width: '100%' }} />
            </View>
            <Text>{car.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width
    },
    screen: {
        flex: 1,
        backgroundColor: Colors.secondary
    }
})

export default Details
