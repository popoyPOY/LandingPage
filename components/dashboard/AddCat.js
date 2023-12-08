import { Text, Appbar, Icon, BottomNavigation, Button, TextInput } from 'react-native-paper';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import Account from './dashboardComponents/Account';


function AddScreen() {
     return (
          <View style={{backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"}}>
               <View style={{ flex: 1, justifyContent: 'space-between', margin: 50, alignItems: 'center'}}>
                    <Image source={require('../../assets/dragons/add_cat.png')} style={{width: 100, height: 100, marginBottom: 10}}></Image>
                    <Text variant='titleLarge' style={{fontWeight: "bold"}}>Add New Cat</Text>
               </View>   

               <View style={{flex: 2, padding: 20, margin: 10, backgroundColor: 'white', borderRadius: 10, shadowColor: "#000",shadowOffset: {
                         width: 0,
                         height: 5,
                         },
                         shadowOpacity: 0.36,
                         shadowRadius: 6.68,
                         elevation: 11,}}>
               <TextInput 
                    activeOutlineColor={"#00BF63"}
                    outlineColor={"black"}
                    style={{width: 300}}
                    label={'Cat Name'} 
                    mode="outlined" 
                    right={ <TextInput.Icon icon="cat" /> }/>
               <TextInput 
                    activeOutlineColor={"#00BF63"}
                    outlineColor={"black"}
                    style={{width: 300}}
                    label={'Age'} 
                    mode="outlined" 
                    right={ <TextInput.Icon icon="numeric" /> }/>
               </View>

               <View style={{flex: 2}}>
               <Button 
                         textColor={"black"}
                         icon={'plus'} 
                         mode={'elevated'}
                         buttonColor={"white"}
                         onPress={()=> (console.log(1))} 
                         style={{marginBottom: 10}}>Add New Cat
               </Button>
               </View>

          </View>
     )
}



export default AddScreen;