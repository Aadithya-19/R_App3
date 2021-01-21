import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'

import Home from '../HSComponents/Home';
import Compare from '../HSComponents/Compare';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home:Home,
    Compare:Compare,    
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const routeName = navigation.state.routeName;
                if (routeName === "Home") {
                    return(
                        <Icon name="home" type="font-awesome" />
                    )
                }
                else if (routeName === "Compare") {
                    return(
                        <Icon name="compare-arrows" type="material-icons" />
                    )
                    console.log("Hi")
                }
            }
        })
    }
)

console.log(TabNavigator)
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
