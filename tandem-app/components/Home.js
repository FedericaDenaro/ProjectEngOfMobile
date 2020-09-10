import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  FlatList,
} from 'react-native';
import styles from '../styles';
import { Subscribe } from 'unstated';
import AuthContainer from '../Container/AuthContainer';
import DropDownPicker from 'react-native-dropdown-picker';
import { Input, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import * as firebase from 'firebase';
import firebaseConfig from '../Config';

const ref = firebase.database(firebaseConfig).ref();
const users = ref.child('Users');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
      level: 'a1',
    };
  }

  search = async () => {
    const array = await this.props.search(
      this.state.language,
      this.state.level.toUpperCase()
    );
    this.props.resultsNavigation(array, this.state.language, this.state.level);
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.containter}>
          <ImageBackground
            style={styles.fixed}
            source={require('assets/unibzTandem.jpg')}
          />

          <View style={styles.imagecontainer}>
            <Image
              style={styles.logo}
              source={require('assets/Tandem Logo.png')}
            />
          </View>
        </View>

        <Text style={styles.text}>
          Search for a partner and start learning a new language!
        </Text>

        <View style={styles.searchContainer}>
          <View style={styles.rowContainer}>
            <DropDownPicker
              items={[
                {
                  label: 'English',
                  value: 'english',
                  selected: true,
                },
                {
                  label: 'German',
                  value: 'german',
                },
                {
                  label: 'Italian',
                  value: 'italian',
                },
              ]}
              defaultValue={this.state.language}
              style={styles.pickerStyle}
              dropDownStyle={styles.pickerStyle}
              onChangeItem={(item) =>
                this.setState({
                  language: item.value,
                })
              }
            />

            <DropDownPicker
              items={[
                {
                  label: 'A1',
                  value: 'a1',
                  selected: true,
                },
                {
                  label: 'A2',
                  value: 'a2',
                },
                {
                  label: 'B1',
                  value: 'b1',
                },
                {
                  label: 'B2',
                  value: 'b2',
                },
                {
                  label: 'C1',
                  value: 'c1',
                },
              ]}
              defaultValue={this.state.level}
              containerStyle={{ width: 100, paddingHorizontal: 10 }}
              style={styles.pickerStyle}
              dropDownStyle={styles.pickerStyle}
              onChangeItem={(item) =>
                this.setState({
                  level: item.value,
                })
              }
            />
            <TouchableOpacity activeOpacity={0.5} onPress={this.search}>
              <View style={styles.searchButton}>
                <Text style={styles.textButton}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
