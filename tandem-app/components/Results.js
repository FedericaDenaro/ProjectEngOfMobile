import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
  Button,
} from 'react-native';
import styles from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon, Input } from 'react-native-elements';
import * as firebase from 'firebase';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      results: [],
    };
  }

  async componentDidMount() {
    const array = await this.props.res;
    await this.setState({ results: array });
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <ScrollView>
          <FlatList
            data={this.state.results}
            renderItem={({ item }) => {
              return (
                <View style={styles.listItem}>
                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => {
                      this.props.showProfile(item);
                    }}>
                     {item.photo.length > 0 ? (
                  <Image
                    source={item.photo && { uri: item.photo }}
                      style={{ width: 60, height: 60, borderRadius: 30 }}/>
                ) : (
                  <Image
                    source={require('assets/avatar.png')}
                      style={{ width: 60, height: 60, borderRadius: 30 }}
                  />
                )}
                  
                    <View
                      style={{
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        {' '}
                        {item.name} {item.surname}
                      </Text>
                      <Text>, {item.age}</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></TouchableOpacity>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
