import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
    createAppContainer, 
    createDrawerNavigator, 
    createSwitchNavigator,
    createBottomTabNavigator,
    createStackNavigator
 } from 'react-navigation'

import ProfileScreen from './ProfileScreen'
import MapScreen from './MapScreen'
import SettingsScreen from './SettingsScreen'
import BusListScreen from './BusListScreen' 
import Feed from './Feed'

export default class DashboardScreen extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}


const FeedStack = createStackNavigator({
    Feed: Feed
})

const DashboardTabNavigator = createBottomTabNavigator({
    FeedStack,
    Profile: ProfileScreen,
    BusList: BusListScreen
})

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardTabNavigator,
    Map: MapScreen,
    Settings: SettingsScreen
},{ unmountInactiveRoutes: true})

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: AppDrawerNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator)


