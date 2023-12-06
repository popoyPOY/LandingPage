import { Alert, View, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";
import Header from '../Header';
import { Form, Formik } from "formik";

import { registerSchema } from "../../utils/Schema";

export default function Register( { navigation } ) {
     const [eye, setEye] = useState(true);
     return (

          <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
               <View style={style.container}>
                    <Image source={require('../../assets/signup-cat.png')} style={{height: 200, width: 300 }}></Image>

                    <Formik 
                    initialValues={{email: "", password: "", renter_password: ""}}
                    onSubmit={values => console.log(values)}
                    validationSchema={registerSchema}
                    >
                         {( { handleChange, handleBlur, handleSubmit, values, errors, touched } ) => (
                              <View style={{marginTop: 10}}>
                                   <View>
                                        <TextInput                    
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
                                   </View>

                                   <View style={{alignItems: "center", margin: 5}}>
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