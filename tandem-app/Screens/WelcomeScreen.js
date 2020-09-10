import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles} from '../styles.js';
import * as firebase from 'firebase';
import { Asset } from 'expo-asset';

export default class WelcomeScreen extends React.Component {
   state = {
        loaded: false,

    };

   async componentDidMount() {

   
      firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'AppHome' : 'Login')}
    )
  }

render() {
    return (

      <View style={style.container}>
      
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
