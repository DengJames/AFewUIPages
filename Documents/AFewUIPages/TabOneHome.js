//TabOneHome

'use strict';
import React, { Component } from 'react';
import {
  Alert,
  AppRegistry, 
  StyleSheet, 
  Text,
  View,
  Image
} from 'react-native';

export default class TabOneHome extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>

          <Text style={styles.textHeader}>
           Home Page
          </Text>

    	  <Image source={require('../AFewUIPages/Resources/tree.jpg')} style={styles.image}/>

      	  <View style={styles.containerForQuote}>

          <Text >
            "There is one thing stronger than all the armies of the world, and that is an idea whose time has come."
          </Text>
          <Text style={styles.name}>
                - Victor Hugo
          </Text>

      	  </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   		backgroundColor: '#f6fafb',
        alignItems: 'center',
        flex:1

  },
   containerForQuote: {
        alignItems: 'flex-end',
        padding:15,
  },

  image: {
		 width: 400,
		 height: 138,   
		 marginBottom: 20,
  },

  textHeader: {
	    fontSize: 20,
	    textAlign: 'center',
	    padding: 20,
  },
   name: {
	    fontSize: 13,
	    color: 'gray',

  }

  

});

