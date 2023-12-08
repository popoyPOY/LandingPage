import {View, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native'
import {Text, Button} from 'react-native-paper'





function Account(props){
     return (
          <View style={style.Header}>
          <TouchableOpacity style={{flexDirection:'row', alignItems: 'center'}} >
               <Image  source={props.image} style={{height: 50, width: 50, marginRight: 10 }}></Image>
               <Text variant='headlineSmall' style={{color:"white", fontWeight:300}}>{props.name}</Text>
          </TouchableOpacity>
               <Button icon="logout" textColor='white' mode='text' onPress={props.OnPress}>Logout</Button>
          </View>
     )
}



export default Account;


const style = StyleSheet.create({
     Header: {
          
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#00BF63',
          alignItems: 'center',
          padding: 20,
          borderRadius: 20, 
          shadowColor: '#000',
          shadowOffset: {
               width: 0,
               height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
     }
})