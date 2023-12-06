import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import { Text, Appbar } from 'react-native-paper';

export default function Header() {
  return (
     <Appbar.Header>
          <Image source={require('../assets/cat.png')} style={{height: 45, width: 45}}></Image>
          <Appbar.Content  title="Cat App"/>
          <Appbar.Action icon="message"></Appbar.Action>
     </Appbar.Header>
  );
}