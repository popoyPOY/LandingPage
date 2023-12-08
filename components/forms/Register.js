import { Alert, View, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";
import { useState } from "react";
import Header from '../Header';
import { Form, Formik } from "formik";

import { registerSchema } from "../../utils/Schema";



async function CreateAccount(credentials, navigation) {
     const response =  await fetch('http://127.0.0.1:8000/v1/user/signup', {method: 'POST', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     }, body: credentials
})   
     

     const data = await response.json()

     if (response.status == 400) return Alert.alert(data.message)

     if(response.status == 201) {

          Alert.alert(data.message)

          return (navigation.replace('Login'))
     }else {
          console.log(data)
          return Alert.alert("Error Creating an account, Please try again")
     }
}

export default function Register( { navigation } ) {
     const [eye, setEye] = useState(true);
     return (
          <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
               <View style={style.container}>
                    <Image source={require('../../assets/signup-cat.png')} style={{height: 200, width: 300 }}></Image>

                    <Formik 
                    initialValues={{email: "", password: "", name: ""}}
                    onSubmit={(values) => {
                         data = {
                              name: values.name,
                              email: values.email,
                              password: values.password,
                         }     
                         CreateAccount(JSON.stringify(data), navigation)
                    }}
                    validationSchema={registerSchema}
                    >
                         {( { handleChange, handleBlur, handleSubmit, values, errors, touched } ) => (
                              <View style={{marginTop: 10}}>
                                   <View>
                                        <TextInput     
                                        autoCapitalize="none"               
                                        activeOutlineColor={"#00BF63"}
                                        outlineColor={"black"}
                                        style={{width: 300}}
                                        onBlur={handleBlur('email')}
                                        label={'Email'}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        mode="outlined" 
                                        error={errors.email && touched.email}
                                        right={ <TextInput.Icon icon="email" /> }/>

                                        <HelperText type="error">{errors.email}</HelperText>
                                   </View>

                                   <View>
                                        <TextInput    
                                        autoCapitalize="none"                
                                        activeOutlineColor={"#00BF63"}
                                        outlineColor={"black"}
                                        style={{width: 300}}
                                        onBlur={handleBlur('name')}
                                        label={'Full Name'}
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        mode="outlined" 
                                        error={errors.name && touched.name}
                                        right={ <TextInput.Icon icon="account-circle-outline" /> }/>
                                        <HelperText type="error">{errors.name}</HelperText>
                                        
                                   </View>

                                   <View>
                                        <TextInput 
                                        activeOutlineColor={"#00BF63"}
                                        outlineColor={"black"}
                                        style={{width: 300}}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        onBlur={handleBlur('password')}
                                        label={'Password'} 
                                        mode="outlined" 
                                        error={errors.password && touched.password}
                                        secureTextEntry={eye} 
                                        right= { <TextInput.Icon icon={!eye ? "eye" : "eye-off"} 
                                        onPress={() => setEye(!eye)}/>} />
                                        <HelperText type="error">{errors.password}</HelperText>
                                   </View>

                                   <View>
                                        <TextInput 
                                        activeOutlineColor={"#00BF63"}
                                        outlineColor={"black"}
                                        style={{width: 300}}
                                        onBlur={handleBlur("renter_password")}
                                        onChangeText={handleChange("renter_password")}
                                        value={values.renter_password}
                                        label={'Re-Enter Password'} 
                                        mode="outlined" 
                                        secureTextEntry={eye} 
                                        error={errors.renter_password && touched.renter_password}
                                        right= { <TextInput.Icon icon={!eye ? "eye" : "eye-off"} 
                                        onPress={() => setEye(!eye)}/>} />
                                        <HelperText type="error">{errors.renter_password}</HelperText>
                                   </View>

                                   <View style={{alignItems: "center", marginTop: 2}}>
                                        <Button
                                        textColor={"white"}
                                        buttonColor={"#00BF63"}
                                        icon={'login-variant'} 
                                        mode={'elevated'} 
                                        onPress={handleSubmit} 
                                        style={{marginBottom: 10, width: 200}}>Sign Up
                                        </Button>
                                   </View>
                              </View>
                         )}
                    </Formik>
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