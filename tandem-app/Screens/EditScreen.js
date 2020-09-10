import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles';
import EditProfile from '../components/EditProfile';
import { Subscribe } from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import * as firebase from 'firebase';
import firebaseConfig from '../Config';



export default class EditScreen extends Component {
  
  static navigationOptions = {
    title: 'Edit Profile',

    headerStyle: {
      backgroundColor: '#382D2C',
    },
    headerTitleStyle: { color: '#FAF8CC', textAlign: 'center' },
  };

  render() {
   
    return (
      <Subscribe to={[ProfileContainer]}>
        {(profContainer) => (
          <EditProfile
            getName={this.props.navigation.getParam('name')}
            getSurname={this.props.navigation.getParam('surname')}
            getAge={this.props.navigation.getParam('age')}
            getBio={this.props.navigation.getParam('bio')}
            getResidence={this.props.navigation.getParam('residence')}
            getEnglish={this.props.navigation.getParam('english')}
            getItalian={this.props.navigation.getParam('italian')}
            getGerman={this.props.navigation.getParam('german')}
            getEmail={this.props.navigation.getParam('email')}
            getPhoto={this.props.navigation.getParam('photo')}
            goToProfile = {() => this.props.navigation.push('Profile')} 
            update={(name,surname,bio,age,english,german,italian, residence, photo) =>
              profContainer.update(name,surname,bio,age,english,german,italian, residence, photo)
            }/>
        )}
      </Subscribe>
    );
  }
}
