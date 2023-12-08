import { Alert, View, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";
import { useState } from "react";
import Header from '../Header';

import { Formik } from "formik";

import { forgotSchema } from "../../utils/Schema";

export default function Reset( { navigation } ) {
     const [eye, setEye] = useState(true);
     return (
     
          <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Image source={require('../../assets/cat-logo.png')} style={{height: 100, width: 400 }}></Image>

               <Formik
               initialValues={{email: ""}}
               validationSchema={forgotSchema}
               onSubmit={values => (console.log(values))}>
                    {({ handleBlur, handleChange, handleSubmit, values, errors })=> (
               <View>
                    <View>
                         <TextInput 
                         activeOutlineColor={"#00BF63"}
                         style={{width: 300}}
                         onChangeText={handleChange('email')}
                         values={values.email}
                         onBlur={handleBlur('email')}
                         label={'Email'} 
                         mode="outlined" 
                         error={errors.email}
                         right={ <TextInput.Icon icon="email" /> }/>
                    </View>

                    <HelperText type="error">{errors.email}</HelperText>

                    <Button 
                         textColor={"black"}
                         buttonColor={"white"}
                         icon={'send'} 
                         mode={'elevated'} 
                         onPress={handleSubmit}
                         style={{marginTop: 10 }}>Send Verification
                    </Button>


               </View>
                    )}
               </Formik>

          </KeyboardAvoidingView>
     );
}

const style = StyleSheet.create({
     container: {
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },
     ImageContainer: {
          flex: 1
     },
})