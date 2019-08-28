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

const DashboardTabNavigator = createBottomTabNavigator({
    Feed,
    Profile: ProfileScreen,
    BusList: BusListScreen
},
{
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName
        };
    }
}
)

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardTabNavigator,
    Map: MapScreen,
    Settings: SettingsScreen
},
{
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
        headerStyle: {
            
        }
    }
}
)

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: AppDrawerNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator)


