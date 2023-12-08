import { Text, Appbar, Icon, BottomNavigation, Button } from 'react-native-paper';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native';

import { WhiteButton } from "../WhiteButton"
import Account from "./dashboardComponents/Account"
import Container from './dashboardComponents/Container';

import * as SecureStore from 'expo-secure-store';
import { useState, useEffect } from 'react';

import Login from '../forms/Login';


async function Me(setUsername, setName, setAge) {


     const token = await SecureStore.getItemAsync('token')
     const response =  await fetch('http://127.0.0.1:8000/v1/user/me', {method: 'GET', headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
     }
})   
     

     const data = await response.json()

}


async function Revoke() {
     const token = await SecureStore.getItemAsync('token')
     const response =  await fetch('http://127.0.0.1:8000/v1/user/logout', {method: 'GET', headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
     }
})   
     

     const data = await response.json()

     return Alert.alert('User has been Sign Out', data.message)
}



function Board({ navigation }) {

     const getInfo = () => {
          return <Account name={"admin123@admin.com"} image={require('../../assets/cat.png')} OnPress={() => {
               Revoke()
               navigation.replace('Login')
          }}/>
     }    

     return (
          <View style={style.container}>
               
               {getInfo()}

               <View style={{flex: 1, marginTop: 30}}>
                    <View style={{ flexDirection: "row", justifyContent: 'flex-start'}}>
                    <Text variant='headlineLarge' style={style.catList}>Your Cat List</Text>
                    </View>
                    <ScrollView>
                    { /*  This is the Cat Component*/}
                    <View style={style.componentContainer}>
                         <Container name={'test'} age={'tEST'} />
                         <Container name="Putin" age="69"/>
                         <Container name="Hitler" age="59"/>
                         <Container name="Tifa" age="59"/>
                         <Container name="Tifa" age="59"/>
                         <Container name="Tifa" age="59"/>
                    </View>
                    </ScrollView>
               </View>
          </View>
     )
}

export default Board;


const style = StyleSheet.create({
     container: 
     {
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
     },
     componentContainer: 
     {
          flex: 3, 
          flexDirection: 'row', 
          justifyContent:'flex-start', 
          flexWrap:'wrap', 
          justifyContent: 'center'
     },
     catList: {
          fontWeight: 'bold', 
          marginRight: 200
     }
})