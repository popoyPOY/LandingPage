import { ImageBackground, View , TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { Button, Text} from "react-native-paper";
import Header from '../Header';

export default function Welcome( { navigation } ) {
     return (
          <View style={style.container}>
               <View style={style.TextContainer}>
                    <Text variant="headlineLarge" style={{fontWeight:"bold"}}>Welcome to Cat App</Text>
                    <Text variant="titleMedium">An App where we can entry our Cat</Text>
               </View>

               <View style={style.ImageContainer}>
               <Image source={require('../../assets/cat-logo.png')} style={{height: 1000, width: 400}}></Image>
               </View>

               <View style={style.buttonContainer}>
                    <Button 
                    textColor={"white"}
                    icon={'send-check'} 
                    mode={'elevated'} 
                    buttonColor={"#00BF63"}
                    onPress={() => navigation.navigate('Login')} 
                    style={{marginBottom: 10}}>Click Here to Continue
                    </Button>


               </View>
          </View>
          
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
          alignItems: "center",
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