import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import AuthContainer from '../Container/AuthContainer';
import { Asset } from 'expo-asset';
import { Icon, Input } from 'react-native-elements';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'marcop@gmail.com',
      password: 'provatandem',
      errorMessage: null,
    };
  }
  
  handleLogin = async () => {
    if (await this.props.handleLogin(this.state.email, this.state.password)) {
      this.props.appNavigation;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('assets/welcome.jpg')}
          style={styles.image}>
          <ScrollView>
            <View style={styles.imagecontainer}>
              <Image
                style={styles.logo}
                source={require('assets/Tandem Logo.png')}
              />
            </View>
            <SafeAreaView style={styles.inputcontainer}>
              <TextInput
                onChangeText={(email) => this.setState({ email })}
                placeholder="Email"
                value={this.state.email}
                style={styles.inputtext}
              />

              <TextInput
                onChangeText={(password) => this.setState({ password })}
                placeholder="Password"
                value={this.state.password}
                secureTextEntry={true}
                style={styles.inputtext}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.handleLogin}
                style={{ width: '100%' }}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>LOGIN</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: 'white' }}>
                {' '}
                You don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={this.props.signUpNavigation}>
                <Text style={{ color: 'white' }}> Sign Up! </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
