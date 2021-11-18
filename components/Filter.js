import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import TextFont from './TextFont'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../Utils/Colors'

const Filter = (props) => {
    const [filterOpen, setFilterOpen] = useState(false)
    const [activeFilter, setActiveFilter] = useState(null)

    const filterSetHandler = (filter) => {
        setFilterOpen(prevState => !prevState)
        setActiveFilter(filter)
        props.onFilterSet(filter)
    }
    const clearFilterHandler = () => {
        setActiveFilter(null)
        setFilterOpen(false)
        props.onClear()
    }
    return (
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, backgroundColor: 'rgba(7, 2, 19, 0.4)' }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                    onPress={() => setFilterOpen(prevState => !prevState)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextFont style={{ fontSize: 25, margin: 5, marginRight: 10 }}>Filter</TextFont>
                    <Ionicons name='filter' size={20}></Ionicons>
                    {activeFilter &&
                        <TextFont style={styles.filterOption}>{activeFilter}</TextFont>
                    }
                </TouchableOpacity>
                {activeFilter &&
                    <TouchableOpacity onPress={clearFilterHandler}>
                        <Ionicons size={25} name='remove-circle-outline' />
                    </TouchableOpacity>}
            </View>
            {filterOpen ?
                <View style={styles.filterContainer}>
                    <FlatList
                        horizontal
                        keyExtractor={item => item}
                        data={props.options}
                        renderItem={(itemData) => {
                            return (
                                <TouchableOpacity
                                    style={styles.filterOption}
                                    onPress={() => filterSetHandler(itemData.item)}>
                                    <TextFont>{itemData.item}</TextFont>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
                : null}
        </View>

    )
}

export default Filter

const styles = StyleSheet.create({
    filterContainer: {
        height: 45
    },
    filterOption: {
        padding: 5,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        margin: 5
    }
})
