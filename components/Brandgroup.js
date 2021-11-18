import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CardItem from './CardItem'
import TextFont from './TextFont'
import { Dimensions } from 'react-native'


const Brandgroup = (props) => {
    return (
        <View style={styles.brandGroup}>
            <TextFont style={styles.title}>{props.title}</TextFont>
            <FlatList
                keyExtractor={(item) => item._id}
                horizontal
                data={props.data}
                renderItem={
                    (itemData) => {
                        return (
                            <CardItem
                                showRentals={props.showRentals}
                                onClick={props.itemClicked}
                                title={itemData.item.title}
                                image={itemData.item.image}
                                numberOfRentals={itemData.item.numberOfRentals}
                                id={itemData.item._id} />
                        )
                    }
                } />
        </View>
    )
}

export default Brandgroup

const styles = StyleSheet.create({
    brandGroup: {
        marginBottom: 20
    },
    title: {
        fontSize: 35,
        marginLeft: 10,
        marginBottom: 10
    }
})
