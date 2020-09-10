import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from 'unstated';
import { Linking, AsyncStorage, Alert } from 'react-native';

// Containers for the method used by Profile and EditProfile

const ref = firebase.database(firebaseConfig).ref();
const users = ref.child('Users');

export default class ProfileContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
    };
  }

  getData = async (email) => {
    const english = 'english',
      german = 'german',
      italian = 'italian';
    const items = [];

    await users.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().email === email) {
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
      });
      this.setState({ data: items });
    });
    this.setState({ data: items });

    return this.state.data;
  };

  update = async (
    name,
    surname,
    bio,
    age,
    english,
    german,
    italian,
    residence,
    photo
  ) => {
    const curr = firebase.auth().currentUser.uid;
    const emailCurrent = firebase.auth().currentUser.email;

    await users
      .orderByChild('email')
      .equalTo(emailCurrent)
      .once('value', (snapshot) => {
        snapshot.forEach((userSnapshot) => {
          const id = userSnapshot.key;

          firebase
            .database(firebaseConfig)
            .ref()
            .child('Users/' + id)
            .update({
              name: name,
              surname: surname,
              bio: bio,
              age: age,
              english: english,
              german: german,
              italian: italian,
              residence: residence,
              photo: photo,
            })
            .then(function () {
              console.log('Update successful.');
              Alert.alert('Update successful.');
             
            })
            .catch(function (error) {
              Alert.alert(error);
              console.log(error);
            });
        });
      });
  };
}
