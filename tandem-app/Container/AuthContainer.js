import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from 'unstated';
import { Linking, AsyncStorage, Alert, Platform } from 'react-native';

// Containers for the method used by Login and Signup

const ref = firebase.database(firebaseConfig).ref();
const users = ref.child('Users');

export default class AuthContainer extends Container {
  signOutUser = () => {
    firebase.auth().signOut();

    this.setState({});
  };

  handleSignUp = async (
    name,
    surname,
    age,
    bio,
    residence,
    english,
    german,
    italian,
    email,
    password
  ) => {
    if (
      name === '' ||
      surname === '' ||
      age === '' ||
      email === '' ||
      password === ''
    ) {
      Alert.alert('Oops, you have to fill all the main fields');
    } else {
      console.log(name);
      users.push({
        email: email.toLowerCase(),
        password: password,
        bio: bio,
        age: age,
        residence: residence,
        name: name,
        surname: surname,
        english: english,
        german: german,
        italian: italian,
        photo: 'assets/avatar.png',
      });

      console.log(name);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };

  handleLogin = async (email, password) => {
    if (email == '' || password == '') {
      Alert.alert('Oops, you have to fill all the fields');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => this.setState({ errorMessageLogin: error.message }));
    }
  };
}
