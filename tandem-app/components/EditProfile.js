import React, { Component } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Textarea from 'react-native-textarea';
import styles from '../styles';
import { Subscribe } from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import { Icon, Input } from 'react-native-elements';
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons'; 

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.getName,
      surname: this.props.getSurname,
      age: this.props.getAge,
      residence: this.props.getResidence,
      bio: this.props.getBio,
      english: this.props.getEnglish,
      german: this.props.getGerman,
      italian: this.props.getItalian,
      email: this.props.getEmail,
      password: this.props.getPassword,
      photo: this.props.getPhoto,
    };
  }

  update = async () => {
    await this.props.update(
      this.state.name,
      this.state.surname,
      this.state.bio,
      this.state.age,
      this.state.english,
      this.state.german,
      this.state.italian,
      this.state.residence,
      this.state.photo
    );
    this.props.goToProfile() 
  };

  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  pickImage = async () => {
    try {
      this.getPermissionAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ photo: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
         
<TouchableOpacity activeOpacity={0.5}
              style={{
              alignSelf: 'flex-end',
              marginTop: 10,
              marginRight: 15,
              padding: 5,
            }} onPress={this.update}>
              <View style={styles.searchButton}>
                <Text style={styles.textButton}>Save</Text>
              </View>
            </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          
            <TouchableOpacity onPress={this.pickImage}>
              
               {this.state.photo.length > 0 ? (
                 
                  <Image
                    source={this.state.photo && { uri: this.state.photo }}
                   style={{
                  borderRadius: 70,
                  borderWidth: 3,
                  borderColor: '#0000FF',
                  width: 120,
                  height: 120,
                  marginTop: 15,
                  marginBottom: 10,
                }}
                  />
                ) : (
                  <Image
                    source={require('assets/avatar.png')}
                    style={{
                  borderRadius: 70,
                  borderWidth: 3,
                  borderColor: '#0000FF',
                  width: 120,
                  height: 120,
                  marginTop: 15,
                  marginBottom: 10,
                }}
                  />
                )}
                 <AntDesign style={{position: 'absolute', top: 120, right: 15}}name="edit" size={24} color="#0000FF"  />
            </TouchableOpacity>
            
             
          </View>

          <View >
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.editNames}>Name: </Text>
              <TextInput
                style={styles.editinput}
                onChangeText={(name) => this.setState({ name })}
                defaultValue={this.state.name}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.editNames}>Surname: </Text>
              <TextInput
                style={styles.editinput}
                onChangeText={(surname) => this.setState({ surname })}
                defaultValue={this.state.surname}
              />
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.editNames}>Age: </Text>
              <TextInput
                style={styles.editinput}
                onChangeText={(age) => this.setState({ age })}
                defaultValue={this.state.age}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.editNames}>Residence: </Text>
              <TextInput
                style={styles.editinput}
                onChangeText={(residence) => this.setState({ residence })}
                defaultValue={this.state.residence}
              />
            </View>
          </View>

          <View>
          
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.editNames}>English: </Text>
              <RNPickerSelect
                items={[
                  {
                    label: 'A1',
                    value: 'A1',
                  },
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
                  label: this.state.english,
                  value: this.state.english,
                }}
                defaultValue={this.state.english}
                style={styles.pickerStyle}
                dropDownStyle={styles.pickerStyle}
                onValueChange={(value) =>
                  this.setState({
                    english: value,
                  })
                }
              />
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.editNames}>Italian: </Text>
              <RNPickerSelect
                items={[
                  {
                    label: 'A1',
                    value: 'A1',
                  },
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
                  label: this.state.italian,
                  value: this.state.italian,
                }}
                defaultValue={this.state.italian}
                style={{
                  backgroundColor: '#FAF8CC',
                  marginRight: 10,
                  padding: 10,
                  width: '70%',
                  marginTop: 20,
                  fontSize: 14,
                  borderRadius: 10,
                  marginBottom: 0,
                }}
                dropDownStyle={styles.pickerStyle}
                onValueChange={(value) =>
                  this.setState({
                    italian: value,
                  })
                }
              />
            </View>
          </View>

          <View style={{ flex: 1,  flexDirection: 'row', marginTop: 15 }}>
            <Text style={styles.editNames}>German: </Text>
            <RNPickerSelect
              items={[
                {
                  label: 'A1',
                  value: 'A1',
                },
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
                label: this.state.german,
                value: this.state.german,
              }}
              defaultValue={this.state.german}
              style={styles.pickerStyle}
              dropDownStyle={styles.pickerStyle}
              onValueChange={(value) =>
                this.setState({
                  german: value,
                })
              }
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.editNames}>Description: </Text>
            <Textarea
              style={{
                backgroundColor: '#FAF8CC',
                marginRight: 10,
                padding: 10,
                width: '70%',
                marginTop: 20,
                fontSize: 14,
                borderRadius: 10,
                marginBottom: 0,
              }}
              onChangeText={(bio) => this.setState({ bio })}
              defaultValue={this.state.bio}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
