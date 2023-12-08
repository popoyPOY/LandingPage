import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import Login  from './components/forms/Login';
import Register  from './components/forms/Register';
import Welcome  from './components/forms/Welcome';
import Home from './components/forms/Home';
import Reset from './components/forms/Reset';
import Board from './components/dashboard/Dashboard';
import AddScreen from './components/dashboard/AddCat';

const Stack = createNativeStackNavigator();



export default function App() {
  return (

    <PaperProvider>
        <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome' >
            <Stack.Screen name='Welcome' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Register' component={ Register} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false }} />
            <Stack.Screen name='Reset' component={Reset} options={{headerShown: true }} />

          </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
