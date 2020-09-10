import React, { Component } from 'react';
import { View} from 'react-native';
import styles from '../styles';
import SignUp from '../components/SignUp';
import { Subscribe } from 'unstated';
import AuthContainer from '../Container/AuthContainer';

export default class SignUpScreen extends Component {


    render() {
        return (

           <Subscribe to={[AuthContainer]}>
			{
				authContainer => (
					<SignUp
						loginNavigation={() => this.props.navigation.navigate('Welcome')}
            appNavigation={() => this.props.navigation.navigate('AppHome')}
						handleSignUp={(name, surname, age, bio, residence, english, german, italian, email, password, photo)=>authContainer.handleSignUp(name, surname, age, bio, residence, english, german, italian, email, password, photo)}
					/>
				)
			}
		</Subscribe>
        );
    }
}