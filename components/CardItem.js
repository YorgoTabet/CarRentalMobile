import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import TextFont from './TextFont';

const CardItem = (props) => {
    return (
        <TouchableOpacity style={styles.cardItem} onPress={() => props.onClick(props.id)}>
            <ImageBackground source={{ uri: props.image }} style={styles.image} >
                {props.showRentals ?
                    <View style={{ height: '70%' }}>
                        <View style={styles.numberContainer}>
                            <Ionicons name='car-sharp' color='white' size={20} />
                            <TextFont style={styles.numberOfRentals}>{props.numberOfRentals}</TextFont>
                        </View>
                    </View> :
                    null
                }
                <View style={{ height: '30%', justifyContent: 'flex-end' }}>
                    <LinearGradient
                        colors={['transparent', 'rgba(38, 37, 37, 0.8)']}

                        locations={[0, 0.8]}>
                        <Text style={styles.item} >
                            {props.title}
                        </Text>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({
    numberContainer: {
        backgroundColor: 'rgba(38, 37, 37, 0.8)',
        alignItems: 'center',
        flexDirection: 'row',
        width: '35%',
        borderBottomRightRadius: 5

    },
    numberOfRentals: {
        fontWeight: 'bold',
        height: 20,
        width: 20,
        textAlign: 'center',
        borderRadius: 5,
        margin: 5,
        color: 'white'

    },
    cardItem: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    item: {
        color: 'white',
        margin: 5,
        fontFamily: 'Montserrat_400Regular'
    }
})
