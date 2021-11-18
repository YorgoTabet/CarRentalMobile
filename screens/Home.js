import React, { cloneElement, useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Brandgroup from '../components/Brandgroup'
import TextFont from '../components/TextFont'
import Colors from '../Utils/Colors'
import { useSelector } from 'react-redux'

const Home = (props) => {
    const [cars, setCars] = useState([])
    const [differentBrands, setDifferentBrands] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    const showRentals = useSelector(state => state.showRentals)

    const getDifferentBrands = (data) => {
        let tempArray = []
        for (let key in data) {
            if (!tempArray.includes(cars[key].brand.name)) {
                tempArray.push(cars[key].brand.name)
            }
        }
        setDifferentBrands(tempArray)
    }
    const viewCarHandler = (id) => {
        props.navigation.navigate('Details', { car: cars.filter(car => car._id === id) })
    }

    useEffect(() => {
        setIsLoading(true)
        fetch('https://rental-project-96fe5-default-rtdb.europe-west1.firebasedatabase.app/cars/result.json',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                return response.json()
            }).then(data => {
                setCars(data)
                setIsLoading(false)
            }).catch(error => {
                setIsError(error)
            })
    }, [])
    useEffect(() => {
        getDifferentBrands(cars)

    }, [cars])
    if (isLoading) {
        return (
            <ActivityIndicator
                size='large'
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    backgroundColor: Colors.secondary,
                    width: '100%',
                    height: '100%'
                }}
                color={Colors.primary} />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item) => item}
                data={differentBrands.sort()}
                renderItem={
                    (itemData) => {
                        return (
                            <Brandgroup
                                showRentals={showRentals}
                                itemClicked={viewCarHandler}
                                title={itemData.item}
                                data={cars.filter(car => car.brand.name === itemData.item)} />
                        )
                    }
                }
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.secondary
    },
    carousel: {
        flexDirection: 'row',
    },
    carouselItem: {
        height: 100,
        width: 100,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10,
    },
    carouselImage: {
        height: '100%',
        width: '100%',
    }

})
