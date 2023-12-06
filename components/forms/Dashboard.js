import { Text, Appbar, Icon, BottomNavigation, Button } from 'react-native-paper';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { WhiteButton } from "../WhiteButton"


function Board() {
     return (
          <View style={{backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"}}>
               <View style={{ flexDirection: 'row', justifyContent: "space-evenly", backgroundColor:"#00BF63", alignItems: "center", padding: 10, borderRadius: 20}}>

               <TouchableOpacity style={{flexDirection:'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/avatar.png')} style={{height: 50, width: 50, marginRight: 10 }}></Image>
                    <Text variant='headlineSmall' style={{color:"white", marginRight: 80, fontWeight:300}}>Jaynel Patiarba</Text>
               </TouchableOpacity>
               
                    <Button icon="logout" textColor='white' mode='text'>Logout</Button>
               </View>
               <View style={{flex: 1, marginTop: 30}}>
                    <View style={{ flexDirection: "row", justifyContent: 'flex-start'}}>
                    <Text variant='headlineLarge' style={{fontWeight: 'bold', marginRight: 200}}>Your Cat List</Text>
                    </View>
                    <ScrollView>

                    { /*  This is the Cat Component*/}
                    <View style={{flex: 3, flexDirection: 'row', justifyContent:'flex-start', flexWrap:'wrap', justifyContent: 'center'}}>
                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>
                         

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>

                         <View style={style.CatContainer}> 
                         <Image source={require('../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
                         <Text>Hitter</Text>
                         <Text>5</Text>
                         </View>
                    </View>
                    </ScrollView>
               </View>
          </View>
     )
}

export default Board;


const style = StyleSheet.create({
     CatContainer: {
          backgroundColor: 'white', 
          padding: 20, 
          alignItems: 'center', 
          borderRadius: 20, 
          margin: 10, 
          justifyContent: 'center', 
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 5,
         },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
         elevation: 10,}
})