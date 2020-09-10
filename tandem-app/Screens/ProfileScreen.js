import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import Profile from '../components/Profile';
import ProfileContainer from '../Container/ProfileContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'My Profile',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      backgroundColor: '#382D2C',
    },
    headerTitleStyle: { color: '#FAF8CC', textAlign: 'center' },
    headerRight: (
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => {
          firebase.auth().signOut();
        }}>
        <Ionicons name={'ios-log-out'} size={35} color={'#FAF8CC'} />
      </TouchableOpacity>
    ),
  };

  render() {
    return (
      <Subscribe to={[ProfileContainer]}>
        {(profile) => (
          <Profile
            getData={(email) => profile.getData(email)}
            edit={(item) =>
              this.props.navigation.navigate('EditProfile', {
                name: item.name,
                surname: item.surname,
                age: item.age,
                bio: item.bio,
                residence: item.residence,
                english: item.english,
                italian: item.italian,
                german: item.german,
                email: item.email,
                password: item.password,
                photo: item.photo,
              })
            }></Profile>
        )}
      </Subscribe>
    );
  }
}
