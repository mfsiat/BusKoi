import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
    createAppContainer, 
    createDrawerNavigator, 
    createSwitchNavigator
 } from 'react-navigation'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

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

const DashboardTabNavigator = createMaterialBottomTabNavigator({
    Feed: { screen: Feed,  
        navigationOptions:{  
            tabBarLabel:'Feed',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                </View>),  
        }  
    },  
    Profile: { screen: ProfileScreen,  
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                </View>),  
            activeColor: '#f60c0d',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#f69b31' },  
        }  
    },  
    BusList: { screen: BusListScreen,  
        navigationOptions:{  
            tabBarLabel:'Bus List',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-bus'}/>  
                </View>),  
            activeColor: '#615af6',  
            inactiveColor: '#46f6d7',  
            barStyle: { backgroundColor: '#67baf6' },  
        }  
    }
},
    {  
      initialRouteName: "Feed",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    }
)

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardTabNavigator,
    Map: MapScreen,
    Settings: SettingsScreen
},
{ 
    unmountInactiveRoutes: true
})

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: AppDrawerNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator)


