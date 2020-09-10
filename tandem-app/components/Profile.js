import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles';
import * as firebase from 'firebase';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [],
    };
  }

  async componentDidMount() {
    const currentUserEmail = firebase.auth().currentUser.email;
    const array = await this.props.getData(currentUserEmail);
    await this.setState({ dataUser: array });
  }

  render() {
    return (
      <FlatList
        data={this.state.dataUser}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  alignSelf: 'center',
                }}
                onPress={() => {
                  this.props.edit(item);
                }}>
                <View style={styles.editButton}>
                  <Text style={styles.textButton}>Edit</Text>
                </View>
              </TouchableOpacity>

              <SafeAreaView style={styles.imagecontainer}>
                <Text style={styles.header}>
                  {' '}
                  {item.name} {item.surname}
                </Text>
                {item.photo.length > 0 ? (
                  <Image
                    source={item.photo && { uri: item.photo }}
                    style={styles.photo}
                  />
                ) : (
                  <Image
                    source={require('assets/avatar.png')}
                    style={styles.photo}
                  />
                )}

                <SafeAreaView>
                  <Text style={styles.subHeader}> Age: {item.age} </Text>

                  <Text style={styles.subHeader}>
                    {' '}
                    Location: {item.residence}{' '}
                  </Text>
                  <SafeAreaView>
                    <Text style={styles.bioHeader}>{item.bio} </Text>
                  </SafeAreaView>
                </SafeAreaView>

                <Text style={styles.langHeader}>
                  English: {item.english}
                  {'\n'} Italian: {item.italian}
                  {'\n'} German: {item.german}
                </Text>
              </SafeAreaView>
            </ScrollView>
          );
        }}
      />
    );
  }
}
