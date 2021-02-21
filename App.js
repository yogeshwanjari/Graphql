import React, { Component } from 'react';
import { Text, View, ScrollView, styles, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Container, Header, Content, Accordion } from "native-base";
import Tab from './ABC/Tab';


const Drawer = createDrawerNavigator();


const App = () => {
  return (
   
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Tab" component={Tab} />
       
      </Drawer.Navigator>
      </NavigationContainer>
     
    );
  };
  
  export default App;
  
  