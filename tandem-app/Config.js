import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCVA8Znv0PAF12p_edkZOULmbpXxmVWZsQ",
  authDomain: "tandem-6807c.firebaseapp.com",
  databaseURL: "https://tandem-6807c.firebaseio.com",
  projectId: "tandem-6807c",
  storageBucket: "tandem-6807c.appspot.com",
  messagingSenderId: "394040076169",
  appId: "1:394040076169:web:307d987961e9cb3f9ea358",
  measurementId: "G-E37K3ZJB71"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
