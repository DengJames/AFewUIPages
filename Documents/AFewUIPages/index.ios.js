//AFewUIPages Page

'use strict';
import React, { Component } from 'react';
import {
  Alert,
  AppRegistry, 
  StyleSheet, 
  Text,
  TouchableHighlight,
  View,
  NavigatorIOS
} from 'react-native';

import SignUpPageOne from './SignUpPageOne';
import SignUpPageTwo from './SignUpPageTwo';
import LoginPage from './LoginPage';



export default class AFewUIPages extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: AFewUIPagesPage,
          title: 'AFewUIPages Page',             
           navigationBarHidden: true,
        }}
        style={{flex: 1}}
      />
    );
  }
}

class AFewUIPagesPage extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }
  _onForwardToSignUpPageOne = () => {
    this.props.navigator.push({
    component: SignUpPageOne,
    barTintColor: '#f6fafb',
    leftButtonIcon: require('./Resources/leftButton.png'),
    rightButtonIcon: require('./Resources/forwardButton.png'),
    onLeftButtonPress: () =>     this._handleBackPress(),
    onRightButtonPress: () =>    this._onForwardToSignUpPageTwo(),
    });
  }
  _onForwardToSignUpPageTwo = () => {
    this.props.navigator.push({
    component: SignUpPageTwo,
    barTintColor: '#f6fafb',
    leftButtonIcon: require('./Resources/leftButton.png'),
    onLeftButtonPress: () =>     this._handleBackPress(),
    });
  }
  _onForwardToLoginPage = () => {
    this.props.navigator.push({
    component: LoginPage,
    navigationBarHidden:true
  });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topHalfContainer}>
           <Text style={styles.textAFewUIPages}>
            First Page
          </Text>
        </View>

        <View style={styles.bottomHalfContainer}>
          <TouchableHighlight onPress={this._onForwardToSignUpPageOne} underlayColor="white">
            <View style={styles.buttonSignUp}>
              <Text style={styles.buttonTextSignUp}>SIGN UP</Text>
            </View>


          </TouchableHighlight>
          <TouchableHighlight onPress={this._onForwardToLoginPage} underlayColor="white">
            <View style={[styles.buttonSignUp, styles.buttonLogIn]}>
              <Text style={styles.buttonTextLogIn}>LOG IN</Text>
            </View>
          </TouchableHighlight>  
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fafb',
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomHalfContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textAFewUIPages: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  buttonSignUp: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#40e0d0',
    borderWidth: 1,
    borderColor: '#fff',
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:5,
    paddingBottom:5,
  },
  buttonLogIn: {
    backgroundColor:'white',
    borderColor: '#40e0d0',
  },
  buttonTextSignUp: {
    color: 'white',
    fontSize: 15
  },
  buttonTextLogIn: {
    color: '#40e0d0',
    fontSize: 15,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AFewUIPages', () => AFewUIPages);
