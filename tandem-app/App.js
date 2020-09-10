 import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Provider} from 'unstated';
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignUpScreen from './Screens/SignUpScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import ResultsScreen from './Screens/ResultsScreen.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import EditScreen from './Screens/EditScreen.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './Screens/WelcomeScreen.js';
import UserScreen from './Screens/UserScreen.js';

const routesSearch=({
        Home: HomeScreen, 
        Results: ResultsScreen,
        User: UserScreen
    }
);


const optionsInitial = {
    initialRouteName: 'Home',

};
const AppNavigator = createStackNavigator(routesSearch, optionsInitial); 



const routesProfile={
    Profile: ProfileScreen,
    EditProfile: EditScreen,  
};

const optionsProfile={
    initialRouteName:'Profile'
};

const ProfileNavigator=createStackNavigator(routesProfile, optionsProfile);



const tabRoutes = {
    Home: AppNavigator,
    Profile: ProfileNavigator,

};

const getIcon = (name, focused, tint) => {
    const color = focused ? tint : "#736F6E"
    return <Ionicons name={name} size={30} color={color}/>
};

AppNavigator.navigationOptions = {
    tabBarIcon: ({focused, tint}) => getIcon("ios-home", focused, '#382D2C'),
};


ProfileNavigator.navigationOptions = {
    tabBarIcon: ({focused, tint}) => getIcon("ios-person", focused, '#382D2C'),
};

const TabNavigator = createBottomTabNavigator(tabRoutes, {
    tabBarOptions: {
        activeTintColor: '#382D2C',
        inactiveTintColor: '#736F6E',
        style: {
            backgroundColor: '#FAF8CC'
        }
    }
});


const switchRoutes = {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    AppHome: TabNavigator
};
const switchOptions = {
    initialRouteName: 'Welcome'
};

const InitialNavigator = createSwitchNavigator(switchRoutes, switchOptions)

const AppContainer = createAppContainer(InitialNavigator);

export default class App extends React.Component {
    render() {

        return (
          
            <Provider>
               <AppContainer/>
            </Provider>
           
        );
    }
}