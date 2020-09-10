import React from 'react';
import { View} from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import User from '../components/User';

//It calls the Home component

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',

    headerStyle: {
      backgroundColor: '#382D2C',
    },
    headerTitleStyle: { color: '#FAF8CC', textAlign: 'center' },   
  };

  render() {
    return (
      <Subscribe to={[ProfileContainer]}>
        {(profContainer) => (
          <User
            getName = {this.props.navigation.getParam('name')}
            getSurname = {this.props.navigation.getParam('surname')}
            getAge = {this.props.navigation.getParam('age')}
            getBio = {this.props.navigation.getParam('bio')}
            getResidence = {this.props.navigation.getParam('residence')}
            getEnglish = {this.props.navigation.getParam('english')}
            getItalian = {this.props.navigation.getParam('italian')}
            getGerman = {this.props.navigation.getParam('german')}
            getEmail = {this.props.navigation.getParam('email')}
            getPhoto = {this.props.navigation.getParam('photo')}
            ></User>
        )}
      </Subscribe>
    );
  }
}
