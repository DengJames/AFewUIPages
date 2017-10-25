//TabBarPage

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import TabOneHome from './TabOneHome';
import JournalPage from './JournalPage';

export default class TabBarPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: 'tabHome'};
  }


  render() {
    return (

      <TabBarIOS
        barTintColor="#f6fafb">

        <TabBarIOS.Item
          icon={require('./Resources/home.png')}
          selected={this.state.selectedTab === 'tabHome'}
          onPress={() => this.setState({selectedTab: 'tabHome'})}>
          <TabOneHome/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./Resources/chat.png')}
          selected={this.state.selectedTab === 'tabChat'}
          onPress={() => this.setState({selectedTab: 'tabChat'})}>
          <NavigatorIOS
            style={styles.nav}
            ref='nav'
            initialRoute={{
              title: 'Chat',
              component: TabChat,
              navigationBarHidden: true,
              showTabBar: true,
          }}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./Resources/circlePlus.png')}
          selected={this.state.selectedTab === 'tabJournal'}
          onPress={() => this.setState({selectedTab: 'tabJournal'})}>
          <NavigatorIOS
            style={styles.nav}
            ref='nav'
            initialRoute={{ 
              title: 'Journal',
              //Library extended to use the following two lines
              //https://github.com/facebook/react-native/issues/1489
              navigationBarHidden: false,     
              showTabBar: false,
              leftButtonIcon: require('./Resources/cross.png'),
              onLeftButtonPress: () => this.setState({selectedTab: 'tabChat'}),
              component: JournalPage
          }}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./Resources/profile.png')}
          selected={this.state.selectedTab === 'tabProfile'}
          onPress={() => this.setState({selectedTab: 'tabProfile'})}>
          <TabProfile/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./Resources/shop.png')}
          selected={this.state.selectedTab === 'tabMore'}
          onPress={() => this.setState({selectedTab: 'tabMore'})}>
          <TabMore/>
        </TabBarIOS.Item>

      </TabBarIOS>
 
    );
  }

}


/**
 * Chat Tab
 */
class TabChat extends React.Component {
  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Chat</Text>
      </View>
    );
  }

}

/**
 * Profile Tab
 */
class TabProfile extends React.Component {
  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Profile</Text>
      </View>
    );
  }

}

/**
 * More Tab
 */
class TabMore extends React.Component {
  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>More</Text>
      </View>
    );
  }

}



var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64
  },
  tabText: {
    margin: 50,
    fontSize: 40
  },
  nav: {
    flex: 1
  },

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AFewUIPages', () => AFewUIPages);
