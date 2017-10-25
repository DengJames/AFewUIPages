//Journal Page

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Button
} from 'react-native';
 
export default class JournalPage extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.drawLineUnderHeader}>
          <Text style={styles.header}>
            Today
          </Text>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
            <Image
              style={styles.button}
              source={require('./Resources/more.png')}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.horizontal}>
          <Text >
            Today's weight
          </Text>
          <TextInput
              style={[styles.rateInput, styles.weightInput]}
              placeholder='                                      '
          />
          <Text >
            lbs
          </Text>
        </View>

        <View style={styles.horizontal}>
          <Text >
            How would you rate your perfomance today?
          </Text>
          <TextInput
              style={styles.rateInput}
              placeholder='        '
          />
        </View>

        <View style={styles.moveButtonToLeftSide}>
          <Button
            onPress={this._onPressButton}
            color='gray'
            title='Add Note'
          />
          <Button
            onPress={this._onPressButton}
            color='gray'
            title='Add Photo'
          />
        </View>

        <View style={[styles.addPaddingTop, styles.drawLineUnderHeader]}>
          <Text style={styles.header}>
            Upcoming
          </Text>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
            <Image
              style={styles.button}
              source={require('./Resources/more.png')}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.horizontal}>
          <Text style={styles.textUnderlineGray}>
            Take a body photo of yourself
          </Text>
          <Text>
            Mon
          </Text>
        </View>

        <View style={styles.horizontal}>
          <Text style={styles.textUnderlineGray}>
            Take photo of your scale reading
          </Text>
          <Text>
            Mon      
          </Text>
        </View>

        <View style={styles.buttonStyle}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
              <View style={styles.buttonDesign}>
                <Text style={styles.buttonText}>Save</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="#f6fafb">
              <View style={styles.buttonDesign}>
                <Text style={styles.buttonText}>Submit</Text>
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
    alignItems: 'center',
    backgroundColor: '#f6fafb',
    paddingHorizontal: 30,
    paddingTop:90,
    justifyContent:'space-between'
  },
  header: {
    fontSize: 20,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch', 
    paddingVertical: 10,
  },
  moveButtonToLeftSide: {
    alignItems:'flex-start',
    flexDirection:'column',
    alignSelf: 'flex-start',
  },
  drawLineUnderHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  addPaddingTop:{
    paddingTop:20,
  },
  textUnderlineGray:{
    textDecorationLine:'underline',
    color: 'gray'
  },
  rateInput: {
    height: 20,
    fontSize: 10,
    color: '#48BBEC',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
},
  weightInput: {
    marginLeft: 70,
},
  buttonStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding:90,
    flex:1
  },
  buttonDesign: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#40e0d0',
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 20,
    marginTop:50,
    paddingHorizontal:15,
    paddingVertical:5,
    backgroundColor:'white',
    borderColor: '#40e0d0',
  },
    buttonText: {
    color: 'gray',
    fontSize: 15,
    textAlign:'center',
    width: 50, 
  },

});

