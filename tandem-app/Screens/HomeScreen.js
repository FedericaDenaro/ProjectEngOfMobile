import React from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import ResultsContainer from '../Container/ResultsContainer';


import * as firebase from 'firebase';

//It calls the Home component

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',

    headerStyle: {
      backgroundColor: '#382D2C',
    },
    headerTitleStyle: { color: '#FAF8CC', textAlign: 'center' },   
    headerRight:
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => { firebase
      .auth()
      .signOut()}}
                >
                    <Ionicons name={'ios-log-out'} size={35} color={'#FAF8CC'}/>
                </TouchableOpacity>
    
  };

  render() {
    return (
      <Subscribe to={[ResultsContainer]}>
        {(resContainer) => (
          <Home
            resultsNavigation={(res, language, level) =>

                            this.props.navigation.navigate('Results', {
                                res: res,
                                language: language ,
                                level: level                                        
                            },
                                
                            )}
           search={(language, level)=> resContainer.search(language, level)}
          />
        )}
      </Subscribe>
    );
  }
}
