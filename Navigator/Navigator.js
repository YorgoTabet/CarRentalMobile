import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Details from '../screens/Details'
import Colors from '../Utils/Colors';
import Header from '../UI/header';
import { useSelector, useDispatch } from 'react-redux';
import { switchRentals } from '../store/actions/UI';

import ViewRentalsButton from '../components/ViewRentalsButton';


const Stack = createNativeStackNavigator();

const Navigator = () => {
    const rentalsShown = useSelector(state => state.showRentals)
    const dispatch = useDispatch()

    const switchRentalsHandler = () => {
        dispatch(switchRentals())
    }
    console.log(rentalsShown);
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    }
                }}
            >
                <Stack.Screen options={{
                    headerTitle: (props) => <Header />,
                    headerRight: (props) => <ViewRentalsButton
                        show={rentalsShown}
                        onClick={switchRentalsHandler} />
                }} name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default Navigator;