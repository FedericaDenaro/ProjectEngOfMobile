import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import * as firebase from 'firebase';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.getEmail,
      name: this.props.getName,
      
        
      results: [],
    };
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.imagecontainer}>
          <Text style={styles.header}>
            {' '}
            {this.props.getName} {this.props.getSurname}
          </Text>
          {this.props.getPhoto.length > 0 ? (
                  <Image
                    source={this.props.getPhoto && { uri: this.props.getPhoto }}
                    style={styles.photo}
                  />
                ) : (
                  <Image
                    source={require('assets/avatar.png')}
                    style={styles.photo}
                  />
                )}
         
          <SafeAreaView>
            <Text style={styles.subHeader}> Age: {this.props.getAge} </Text>

            <Text style={styles.subHeader}>
              {' '}
              Location: {this.props.getResidence}{' '}
            </Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.bioHeader}>{this.props.getBio} </Text>

            <Text style={styles.langHeader}>
              English: {this.props.getEnglish}
              {'\n'} {'\n'} Italian: {this.props.getItalian}
              {'\n'} {'\n'} German: {this.props.getGerman}
            </Text>

            <TouchableOpacity onPress={() => Linking.openURL('mailto:'+ this.state.email+'?subject=New tandem partner! &body=Hi '+this.state.name+', I would like to be your new tandem partner. Write me back if you agree!')}>
              <View style={styles.searchButton}>

                <Text style={styles.textButton}>Contact!</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
