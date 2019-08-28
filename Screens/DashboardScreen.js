import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

import ProfileScreen from './ProfileScreen'
import MapScreen from './MapScreen'
import SettingsScreen from './SettingsScreen'
import BusListScreen from './BusListScreen' 

export default class DashboardScreen extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Profile: ProfileScreen,
    Map: MapScreen,
    Settings: SettingsScreen,
    BusList: BusListScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'orange'
        }
    }
}

)

const AppContainer = createAppContainer(AppDrawerNavigator)


