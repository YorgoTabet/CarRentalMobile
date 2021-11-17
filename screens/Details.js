import React, { useEffect } from 'react'
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import TextFont from '../components/TextFont'
import Colors from '../Utils/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import History from '../components/History'

const Details = (props) => {

    useEffect(() => {
        props.navigation
        props.navigation.setOptions({
            title: "Details",
            headerTintColor: 'white'
        })

    }, [])

    const car = props.route.params.car[0]
    return (
        <View style={styles.screen} >
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.imageContainer}>

                    <ImageBackground
                        source={{ uri: car.image }}
                        style={{ height: '100%', width: '100%' }} >
                        <LinearGradient
                            colors={['transparent', 'rgba(38, 37, 37, 0.8)']}
                            style={{ height: '100%' }}
                            locations={[0.5, 0.95]}>
                        </LinearGradient>
                    </ImageBackground>

                </View>
                <TextFont style={styles.title}>{car.title}</TextFont>
                <View style={styles.cardContainer}>
                    <TextFont style={styles.subTitle}>Details</TextFont>
                    <View style={styles.details}>
                        <View style={styles.description}><TextFont style={{ fontWeight: 'bold' }}>Description: </TextFont><TextFont>{car.description}</TextFont></View>
                        <View style={styles.description}><TextFont style={{ fontWeight: 'bold' }}>Category: </TextFont><TextFont>{car.category}</TextFont></View>
                    </View>

                </View>
                <View style={styles.cardContainer}>
                    <TextFont style={styles.subTitle}>History</TextFont>
                    <History data={car.history} />
                </View>
            </ScrollView>
        </View>


    )
}
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        paddingBottom: 10,
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 15
    },
    subTitle: {
        fontSize: 20,
        borderColor: 'grey',
        borderBottomWidth: 1,
        width: '100%',
        textAlign: 'center',
    },
    details: {
        width: '100%',
        alignItems: 'stretch'
    },
    title: {
        fontSize: 35,
        width: '100%',
        textAlign: 'center',
        marginTop: 10,
    },
    description: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-evenly'
    },
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
