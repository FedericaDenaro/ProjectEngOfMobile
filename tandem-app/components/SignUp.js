import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import AuthContainer from '../Container/AuthContainer';
import { Icon, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import * as firebase from 'firebase';
import firebaseConfig from '../Config';

const ref = firebase.database(firebaseConfig).ref();
const users = ref.child('Users');

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      bio: '',
      age: '',
      english: 'A1',
      german: 'A1',
      italian: 'A1',
      residence: '',
      email: '',
      password: '',
      photo: '',
      errorMessage: null,
    };
  }

  handleSignUp = async () => {
    if (
      await this.props.handleSignUp(
        this.state.name,
        this.state.surname,
        this.state.age,
        this.state.bio,
        this.state.residence,
        this.state.english,
        this.state.german,
        this.state.italian,
        this.state.email,
        this.state.password
      )
    ) {
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
                onChangeText={(name) => this.setState({ name })}
                placeholder="Name"
                style={styles.inputtext}
              />

              <TextInput
                onChangeText={(surname) => this.setState({ surname })}
                placeholder="Surname"
                style={styles.inputtext}
              />

              <TextInput
                onChangeText={(age) => this.setState({ age })}
                placeholder="Age"
                style={styles.inputtext}
              />

              <TextInput
                onChangeText={(residence) => this.setState({ residence })}
                placeholder="City of Residence"
                style={styles.inputtext}
              />
              <TextInput
                onChangeText={(bio) => this.setState({ bio })}
                placeholder="Description"
                style={styles.inputtext}
              />

              <Text style={styles.textlanguages}>English</Text>

              <RNPickerSelect
                items={[
                  {
                    label: 'A2',
                    value: 'A2',
                  },
                  {
                    label: 'B1',
                    value: 'B1',
                  },
                  {
                    label: 'B2',
                    value: 'B2',
                  },
                  {
                    label: 'C1',
                    value: 'C1',
                  },
                ]}
                placeholder={{
                  label: 'A1',
                  value: 'A1',
                 
                }}
                defaultValue={this.state.english}
                containerStyle={{ width: 100, paddingHorizontal: 10 }}
                style={pickerSelectStyles}
                onValueChange={(value) =>
                  this.setState({
                    english: value,
                  })
                }
              />

              <Text style={styles.textlanguages}>German</Text>

              <RNPickerSelect
                items={[
                  {
                    label: 'A2',
                    value: 'A2',
                  },
                  {
                    label: 'B1',
                    value: 'B1',
                  },
                  {
                    label: 'B2',
                    value: 'B2',
                  },
                  {
                    label: 'C1',
                    value: 'C1',
                  },
                ]}
                placeholder={{
                  label: 'A1',
                  value: 'A1',
                  
                }}
                defaultValue={this.state.german}
                containerStyle={{ width: 100, paddingHorizontal: 10 }}
                style={pickerSelectStyles}
                onValueChange={(value) =>
                  this.setState({
                    german: value,
                  })
                }
              />

              <Text style={styles.textlanguages}>Italian</Text>
              <RNPickerSelect
                items={[
                  {
                    label: 'A2',
                    value: 'A2',
                  },
                  {
                    label: 'B1',
                    value: 'B1',
                  },
                  {
                    label: 'B2',
                    value: 'B2',
                  },
                  {
                    label: 'C1',
                    value: 'C1',
                  },
                ]}
                placeholder={{
                  label: 'A1',
                  value: 'A1',
                  
                }}
                defaultValue={this.state.italian}
                containerStyle={{ width: 100, paddingHorizontal: 10 }}
                style={pickerSelectStyles}
                onValueChange={(value) =>
                  this.setState({
                    italian: value,
                  })
                }
              />
              <TextInput
                onChangeText={(email) => this.setState({ email })}
                placeholder="Email"
                style={styles.inputtext}
              />

              <TextInput
                onChangeText={(password) => this.setState({ password })}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputtext}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.handleSignUp}
                style={{ width: '100%' }}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>REGISTER</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: 'white' }}> Already have an account? </Text>
              <TouchableOpacity onPress={this.props.loginNavigation}>
                <Text style={{ color: 'white' }}> Login! </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#FAF8CC',
    margin: 30,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, 
  },
  inputAndroid: {
    backgroundColor: '#FAF8CC',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});
