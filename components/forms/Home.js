import { View, Image, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Appbar, Icon, BottomNavigation } from 'react-native-paper';
import Header from '../Header';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Board   from "./Dashboard";

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
     return (
       <View style={{backgroundColor: "#fff",
       flex: 1,
       justifyContent: "center",
       alignItems: "center"}}>
         <Text>Home Screen</Text>
       </View>
     )
   }

const AddScreen = () => {
     return (
       <View style={{backgroundColor: "#fff",
       flex: 1,
       justifyContent: "center",
       alignItems: "center"}}>
         <Text>Add Screen</Text>
       </View>
     )
   }

   const Settings = () => {
     return (
       <View style={{backgroundColor: "#fff",
       flex: 1,
       justifyContent: "center",
       alignItems: "center"}}>
         <Text>Settings Scren</Text>
       </View>
     )
   }

export default function Home( {navigation} ) {
     return (
          <Tab.Navigator
          initialRouteName="Home"
          tabBarOption={{
               activeTintColor: 'tomato',
               inactiveTintColor: 'grey',
               labelStyle: { paddingBottom: 10, fontSize: 10 },
               style: { padding: 10, height: 70}
             }}>
               <Tab.Screen name="HomeScreen" component={Board}
               options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                         <Ionicons name="home-outline" color={color} size={size}></Ionicons>
                    )
               }}></Tab.Screen>
               <Tab.Screen name="Board" component={AddScreen}
               options={{     
                    headerShown: false,
                    tabBarLabel: 'Add',
                    tabBarIcon: ({color, size}) => (
                         <Ionicons name="add-circle-outline" color={color} size={size}></Ionicons>
                    )
               }}></Tab.Screen>
               <Tab.Screen name="Settings" component={Settings}
               options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color, size}) => (
                         <Ionicons name="settings-outline" color={color} size={size}></Ionicons>
                    )}}
               ></Tab.Screen>
          </Tab.Navigator>
     );
}


const style = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
     },
     ImageContainer: {
          flex: 6
     },
     TextContainer: {
          flex: 1,
          marginTop: 50
     },
     buttonContainer: {
          flex: 1
     },
     buttonStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          borderRadius: 10,
          padding: 20,
          backgroundColor: "#FAEED1",
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
     }
})