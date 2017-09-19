//GritOn Page

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry, 
  StyleSheet, 
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class GritOn extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topHalfContainer}>
           <Text style={styles.textGritOn}>
            Grit-On
          </Text>
        </View>

        <View style={styles.bottomHalfContainer}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.buttonSignUp}>
              <Text style={styles.buttonTextSignUp}>SIGN UP</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
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
  textGritOn: {
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
AppRegistry.registerComponent('GritOn', () => GritOn);
