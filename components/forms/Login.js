import { Alert, View, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";
import { useState } from "react";
import Header from '../Header';

import { Formik } from "formik";
import * as Yup from 'yup'

import CreateAccount from "../../functions/CreateAccount"

import { loginSchema } from "../../utils/Schema";

import axios from "axios";


async function emailLogin(email, password) {
     const config = {
          method: 'get',
          url: "localhost:5006"
     }

     const response = await axios.post(config)

     return response.data
}


export default function Login( { navigation } ) {
     const [eye, setEye] = useState(true);
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     return (
          <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
               <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/cat-logo.png')} style={{height: 100, width: 400 }}></Image>
                    <Text variant="titleLarge" style={{fontWeight: "bold", marginBottom: 50}}>Cat</Text>
               </View>

               <View style={{marginTop: 10}}>
               <Formik
                    onSubmit={(values) => {
                         console.log(values)
                         navigation.navigate('Home')
                    }}
                    validationSchema={loginSchema}
                    initialValues={{email: "", password: ""}}>
                    {( { handleChange, handleBlur, handleSubmit, values, errors, touched, setTouched }) =>(
                    <View>
                         <View>
                              <TextInput 
                                   activeOutlineColor={"#00BF63"}
                                   outlineColor={"black"}
                                   style={{width: 300}}
                                   value={values.email}
                                   onChangeText={handleChange('email')}
                                   onBlur={handleBlur('email')}
                                   label={'Email'} 
                                   error={errors.email && touched.email}
                                   onFocus={() => setTouched({email: true}, false)}
                                   mode="outlined" 
                                   right={ <TextInput.Icon icon="email" /> }/>
                              <HelperText visible={errors.email} type="error">{errors.email}</HelperText>
                         </View>
                         
                         <View>
                              <TextInput 
                                   activeOutlineColor={"#00BF63"}
                                   outlineColor={"black"}
                                   style={{width: 300}}
                                   label={'Password'} 
                                   onChangeText={handleChange('password')}
                                   onBlur={handleBlur('password')}
                                   value={values.password}
                                   mode="outlined" 
                                   error={errors.password && touched.password}
                                   onFocus={() => setTouched({password: true}, false)}
                                   secureTextEntry={eye}
                                   right= { <TextInput.Icon icon={!eye ? "eye" : "eye-off"} 
                                   onPress={() => setEye(!eye)}/>} />
                                   
                                   <HelperText visible={errors.password} type="error">{errors.password}</HelperText>
                         </View>
                              <Button
                                   textColor={"black"}
                                   buttonColor={"white"}
                                   icon={'login-variant'} 
                                   mode={'elevated'} 
                                   onPress={handleSubmit} 
                                   style={{marginBottom: 10}}>
                                   Login
                              </Button>

                              <Button 
                                   textColor={"white"}
                                   icon={'send-check'} 
                                   mode={'elevated'} 
                                   buttonColor={"#00BF63"}
                                   onPress={() => navigation.navigate('Reset')} 
                                   style={{marginBottom: 10}}>Reset Password
                              </Button>
                    </View>
                    )}

               </Formik>
                    
                    <View style={{justifyContent:"space-between", flexDirection: "row"}}>
                         <View>
                              <Text>Don't have an account?</Text>
                         </View>

                         <View>
                              <TouchableOpacity onPress={() => {navigation.navigate("Register")}}>
                                   <Text style={{color: "#00BF63", marginLeft: 2}}>Register Here</Text>
                              </TouchableOpacity>
                         </View>
                         
                    </View>
               
               </View>

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