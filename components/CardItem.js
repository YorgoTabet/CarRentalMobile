import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

const CardItem = (props) => {
    return (
        <TouchableOpacity style={styles.cardItem} onPress={() => props.onClick(props.id)}>
            <ImageBackground source={{ uri: props.image }} style={styles.image} >
                <LinearGradient
                    colors={['transparent', 'rgba(38, 37, 37, 0.8)']}
                    style={{ height: '30%', justifyContent: 'flex-end' }}
                    locations={[0, 0.8]}>
                    <Text style={styles.item}>
                        {props.title}
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({
    cardItem: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: 'flex-end',
        overflow: 'hidden',

    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    item: {
        color: 'white',
        margin: 5
    }
})
