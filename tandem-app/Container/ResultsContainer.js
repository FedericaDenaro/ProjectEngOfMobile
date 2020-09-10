import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from 'unstated';
import { Linking, AsyncStorage, Alert } from 'react-native';
import User from '../components/User';

const ref = firebase.database(firebaseConfig).ref();
const users = ref.child('Users');

export default class ResultsContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  search = async (language, level) => {
    const english = 'english',
      german = 'german',
      italian = 'italian';
    const items = [];
    const currentUserEmail = firebase.auth().currentUser.email;
   
    await users.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().email !== currentUserEmail){
        if (language === english) {
          if (child.val().english === level) {
            items.push({
              name: child.val().name,
              surname: child.val().surname,
              email: child.val().email,
              age: child.val().age,
              bio: child.val().bio,
              residence: child.val().residence,
              english: child.val().english,
              italian: child.val().italian,
              german: child.val().german,
              photo: child.val().photo,
            });
          }
        }
        if (language === german) {
          if (child.val().german === level) {
            items.push({
              name: child.val().name,
              surname: child.val().surname,
              email: child.val().email,
              age: child.val().age,
              bio: child.val().bio,
              residence: child.val().residence,
              english: child.val().english,
              italian: child.val().italian,
              german: child.val().german,
              photo: child.val().photo,
            });
          }
        }
        if (language === italian) {
          if (child.val().italian === level) {
            items.push({
              name: child.val().name,
              surname: child.val().surname,
              email: child.val().email,
              age: child.val().age,
              bio: child.val().bio,
              residence: child.val().residence,
              english: child.val().english,
              italian: child.val().italian,
              german: child.val().german,
              photo: child.val().photo,
            });
          }
        }
      }});
      this.setState({ results: items });
    });
    this.setState({ results: items });
    return this.state.results;
  };
}
