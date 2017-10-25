// Login Page

'use strict';

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry, 
  StyleSheet, 
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Switch,
  Image,
} from 'react-native';

//to import a NPM package for drawing a solid line with text in the middle
//https://www.npmjs.com/package/react-native-hr
import Hr from './node_modules/react-native-hr/dist/index';
import TabBarPage from './TabBarPage';


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
    }
  }

// Toggle to show/hide password: https://stackoverflow.com/questions/44628346/passing-checkbox-value-to-show-hide-password-via-react-native
  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

    _onPressButton() {
    Alert.alert('You tapped the button!')
  }

    _onForwardToTabBarPage = () => {
    this.props.navigator.push({
    component: TabBarPage,
    navigationBarHidden:true
  });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textHeader}>
            Time to Log In!
        </Text>

        <View style={styles.topHalfContainer}>
              <View style={styles.layoutTextInput}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Email"
                />
              </View>

              <View style={styles.layoutTextInput}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password               "
                  secureTextEntry={this.state.showPassword}
                  onChangeText={(password) => this.setState({ password })}
                />
                <TouchableHighlight onPress={this.toggleSwitch} underlayColor="#f6fafb">
                  <Image
                    source={require('./Resources/eye.png')}
                  />
                </TouchableHighlight>
              </View>

              <TouchableHighlight onPress={this._onForwardToTabBarPage} underlayColor="#f6fafb">
                <View style={styles.buttonLogIn}>
                  <Text style={styles.buttonText}>Log In</Text>
                </View>
              </TouchableHighlight>


              <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
                <Text
                  style={styles.textForgetPassword}>
                  Forget Password?
                </Text>
              </TouchableHighlight>
        </View>

        <Hr lineColor='gray' text='OR' textColor='gray' />

        <View style={styles.bottomHalfContainer}>
              <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
                <View style={[styles.buttonLogIn,styles.buttonFacebook]}>
                  <Text style={styles.buttonText}>Continue with Facebook</Text>
                </View>
              </TouchableHighlight>

              <Text style={styles.textPermission}>
                We will never post anything without your permission.
              </Text>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fafb',
    paddingTop: 20,
    paddingHorizontal: 20, 
  },
  layoutTextInput: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 20
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:30
  },
  bottomHalfContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal:30
  },
  textHeader: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  buttonLogIn: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#40e0d0',
    borderWidth: 1,
    borderColor: '#f6fafb',
    marginTop:30,
    paddingVertical:10,
  },
  buttonFacebook: {
    backgroundColor:'#3b5998',
  },
  inputStyle: {
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
},
  buttonText: {
    color: 'white',
    fontSize: 15
  },
  textForgetPassword: {
    color:'gray', 
    textAlign:'center',
    paddingTop:10
  },
  textPermission: {
    paddingTop:10 ,
    fontSize:10,
    color:'gray', 
    textAlign:'center'
  },

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AFewUIPages', () => AFewUIPages);
