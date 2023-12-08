import {Image, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Text} from 'react-native-paper';



function Container(cat) {
     return (
          <TouchableOpacity onPress={() => {
               Alert.alert('Cat Information', `${cat.name} ${cat.age}`)
          }}>
          <View style={style.CatContainer}> 
               <Image source={require('../../../assets/cute_cat.png')} style={{height: 100, width: 100}}></Image>
               <Text>{cat.name}</Text>
               <Text>{cat.age}</Text>
          </View>
          </TouchableOpacity>
     )
}

export default Container;

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
         elevation: 10,},
})