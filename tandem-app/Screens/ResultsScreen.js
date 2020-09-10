import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import Results from '../components/Results';
import ResultsContainer from '../Container/ResultsContainer';

export default class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',

    headerStyle: {
      backgroundColor: '#382D2C',
    },
    headerTitleStyle: { color: '#FAF8CC', textAlign: 'center' },
  };

  render() {
    return (
      <Subscribe to={[ResultsContainer]}>
        {(results) => (
          <Results
            res={this.props.navigation.getParam('res')}
            language={this.props.navigation.getParam('language')}
            level={this.props.navigation.getParam('level')}
            search={(language, level) => results.search(language, level)}
            showProfile={(item) =>
              this.props.navigation.navigate('User', {
                name: item.name,
                surname: item.surname,
                age: item.age,
                bio: item.bio,
                residence: item.residence,
                english: item.english,
                italian: item.italian,
                german: item.german,
                email: item.email,
                photo: item.photo,
              })
            }></Results>
        )}
      </Subscribe>
    );
  }
}
