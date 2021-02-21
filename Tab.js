import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Text, View, ScrollView, styles, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import InfoScreen from './InfoScreen';
// import IntroductionScreen from './IntroductionScreen';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const InfoStack = createStackNavigator();

const MyTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'red',

          tabBarIcon: ({color}) => (
            <Icon name="home" color={"lime"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="START STREATCHING"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'START STREADHING',
          tabBarColor: 'cyan',
          tabBarIcon: ({color}) => (
            <Icon name="bell" color={"#8A2BE2"} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="SETTING"
        component={InfoStackScreen}
        options={{
          tabBarLabel: 'SETTING ',
          tabBarColor: 'blue',
          tabBarIcon: ({color}) => (
            <Icon name="information" color={'cyan'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  
  export default MyTabScreen;
  
  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintcolor: '#fff',
        tabBarColor: 'green',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              
              backgroundColor="#009387"
              tabBarColor = 'yellow'
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e91e62',
        },
        headerTintcolor: '#e91e62',
        tabBarColor: 'blue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailsStack.Screen
        name="Home"
        component={DetailsScreen}
        options={{
          title: 'Detail',
  
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#e91e62"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </DetailsStack.Navigator>
  );
  
  const InfoStackScreen = ({navigation}) => (
    <InfoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:"cyan",
        },
        headerTintcolor: '#e91e62',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <InfoStack.Screen
        name="Home"
        component={InfoScreen}
        options={{
          title: 'Detail',
  
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="cyan"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </InfoStack.Navigator>
  );

