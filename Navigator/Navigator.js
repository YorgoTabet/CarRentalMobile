import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Details from '../screens/Details'
import Colors from '../Utils/Colors';
import { Text } from 'react-native';
import Header from '../UI/header';


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    headerTitle: (props) => <Header />,
                    headerStyle: {
                        backgroundColor: Colors.primary
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default Navigator;