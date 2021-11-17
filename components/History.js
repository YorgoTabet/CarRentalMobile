import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextFont from './TextFont';

const History = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    let data = props.data
    const itemsPerPage = 5
    const numberOfPages = Math.ceil(data.length / itemsPerPage)
    const endIndex = currentPage * itemsPerPage
    const startIndex = endIndex - itemsPerPage
    const currentData = data.slice(startIndex, endIndex)



    const pages = new Array(numberOfPages).fill(0)

    return (
        <View style={styles.history}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TextFont style={{ fontWeight: 'bold' }}>Name</TextFont>
                    <TextFont style={{ fontWeight: 'bold' }}>Days</TextFont>
                </View>
                {currentData.map(x => {
                    return <View key={x.username + x.days} style={styles.header}><TextFont>{x.username}</TextFont><TextFont>{x.days}</TextFont></View>
                })}
            </View>

            <View style={styles.pages}>
                {pages.map((x, index) => {
                    return (
                        <TouchableOpacity
                            disabled={index + 1 === currentPage}
                            key={index}
                            style={styles.number, currentPage === index + 1 ? styles.active : null}
                            onPress={() => { setCurrentPage(index + 1) }}
                        >
                            <Text style={{ color: 'grey' }}>{index + 1}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>

        </View>

    )
}

export default History

const styles = StyleSheet.create({
    content: {
        width: '100%'
    },
    pages: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end'
    },
    number: {
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'black',
    },
    history: {
        width: '100%',
        paddingHorizontal: 20,
        height: 140,
        justifyContent: 'space-between'
    },
    active: {
        borderBottomWidth: 2,
        borderBottomColor: 'grey'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
