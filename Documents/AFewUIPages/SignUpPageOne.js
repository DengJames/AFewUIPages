// SignUpPageOne

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
  ProgressViewIOS,
  NavigatorIOS

} from 'react-native';


import SignUpPageTwo from './SignUpPageTwo';


export default class SignUpPageOne extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _handleBackPress() {
    this.props.navigator.pop();
  }
  _onForwardToSignUpPageTwo = () => {
    this.props.navigator.push({
    component: SignUpPageTwo,
    barTintColor: '#f6fafb',
    leftButtonIcon: require('./Resources/leftButton.png'),
    onLeftButtonPress: () =>     this._handleBackPress(),
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topHalfContainer}>

            <View style={styles.layoutRow}>
                <Text style={styles.textCatagory}>
                  Your name
                </Text>
                <TextInput
                  style={[styles.inputStyle, styles.inputStyleFUllName]}
                  placeholder="Full Name"
                />
            </View>

            <View style={styles.layoutRow}>
                <Text style={styles.textCatagory}>
                  Date of birth
                </Text>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="dd/mm/yy"
                />
            </View>

            <View style={styles.layoutRow}>
                <Text style={styles.textCatagory}>
                  Gender
                </Text>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
                  <Text style={styles.textGender}>
                    Male
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
                  <Text style={styles.textGender}>
                    Female
                  </Text>
                </TouchableHighlight>
            </View>

        </View>


        <View style={styles.bottomHalfContainer}>
              <TouchableHighlight onPress={this._onForwardToSignUpPageTwo} underlayColor="#f6fafb">
                <View style={styles.buttonNext}>
                  <Text style={styles.buttonText}>NEXT</Text>
                </View>
              </TouchableHighlight>

              <ProgressViewIOS 
                progress= {.5}
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
    paddingTop: 20,
    justifyContent:'space-between'
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:30
  },
  bottomHalfContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom:5
  },
  textCatagory: {
    fontSize: 20,
    margin: 10,
  },
  textGender:{
    color:'gray',
    fontSize: 15,
    margin:15 ,
  },
  buttonNext: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#f6fafb',
    borderWidth: 1,
    borderColor: '#40e0d0',
    paddingVertical:10,
    margin:50
  },
  inputStyle: {
    height: 36,
    padding: 4,
    flexGrow: 1,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    textAlign: 'center'
  },
  inputStyleFUllName: {
    marginLeft: 15,
  },
  buttonText: {
    color:'gray',
    fontSize: 15
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AFewUIPages', () => AFewUIPages);
