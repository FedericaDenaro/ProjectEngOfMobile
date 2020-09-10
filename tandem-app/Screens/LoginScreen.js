import React, { Component } from 'react';
import { View} from 'react-native';
import styles from '../styles';
import Login from '../components/Login';
import { Subscribe } from 'unstated';
import AuthContainer from '../Container/AuthContainer';

//It calls the Login component 

export default class LoginScreen extends Component {

    render() {
        return (
       
       <Subscribe to={[AuthContainer]}>
			{
				authContainer => (
					<Login
						signUpNavigation={() => this.props.navigation.navigate('SignUp')}
            appNavigation={() => this.props.navigation.navigate('AppHome')}
						handleLogin={(email, password)=>authContainer.handleLogin(email, password)}
					/>
				)
			}
		</Subscribe>
        )}
}     
     
  