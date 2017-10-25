// SignUpPageTwo

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
  ProgressViewIOS
} from 'react-native';


//Checkbox
//https://www.npmjs.com/package/react-native-modest-checkbox
import CheckBox from 'react-native-modest-checkbox';
import TabBarPage from './TabBarPage';


export default class SignUpPageTwo extends Component {
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

        <View style={styles.topHalfContainer}>
              <Text style={styles.textHeader}>
                  Time to Log In!
              </Text>

              <View style={styles.layoutRow}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Email"
                />
              </View>

              <View style={styles.layoutRow}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  secureTextEntry={this.state.showPassword}
                  onChangeText={(password) => this.setState({ password })}
                />
                <TouchableHighlight onPress={this.toggleSwitch} underlayColor="#f6fafb">
                  <Image
                    source={require('./Resources/eye.png')}
                  />
                </TouchableHighlight>
              </View>

              <CheckBox
                label='Check after you reconfirm the password'
              />

              <TouchableHighlight onPress={this._onForwardToTabBarPage} underlayColor="#f6fafb">
                <View style={styles.buttonLogIn}>
                  <Text style={styles.buttonText}>Log In</Text>
                </View>
              </TouchableHighlight>

        </View>


        <View style={styles.bottomHalfContainer}>
     
              <Text style={styles.textPadding}>

                <Text style={styles.textPermission}>
                  By signing up, you agree to our{'\ '}
                </Text>

                <Text style={styles.textTouchable} onPress={this._onPressButton}>
                  Terms{'\ '}
                </Text>

                <Text style={styles.textPermission}>
                and that you have read our{'\ '}
                </Text>

                <Text style={styles.textTouchable} onPress={this._onPressButton}>
                  Privacy Policy{'\ '}
                </Text>

                <Text style={styles.textPermission}>
                  and{'\ '}
                </Text>

                <Text style={styles.textTouchable} onPress={this._onPressButton}>
                  Content Policy.
                </Text>

              </Text>


              <ProgressViewIOS 
                progress= {1.0}
                progressTintColor='#40e0d0'
              />

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
  },
  layoutRow: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 20
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:40
  },
  bottomHalfContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom:5,
    paddingTop:20
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
  textPermission: {
    paddingTop:10 ,
    fontSize:11,
    color:'gray', 
    textAlign:'center'
  },
  textTouchable: {
    paddingTop:10 ,
    fontSize:10,
    color:'#4169e1', 
    textAlign:'center'
  },
  textPadding: {
    paddingHorizontal:15,
    textAlign:'center'
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AFewUIPages', () => AFewUIPages);
