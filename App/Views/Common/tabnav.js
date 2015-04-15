'use strict';

var React = require('react-native');
var NewestQuestion = require('../Question/index');
var NewestArticle = require('../Article/index');

var {
  TabBarIOS,
  NavigatorIOS,
  Text,
  View,
  StyleSheet,
} = React;

var TabBarItemIOS = TabBarIOS.Item;
var TabBarNav = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'question',
    };
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarItemIOS
          name="question"
          icon={{uri:'rectangle'}}
          title="问题"
          accessibilityLabel="question"
          selected={this.state.selectedTab === 'question'}
          onPress={() => {
            this.setState({
              selectedTab: 'question',
            });
          }}>
          <NavigatorIOS 
            style={styles.container}
            initialRoute={{
              title: '问题',
              component: NewestQuestion,
            }}/>
        </TabBarItemIOS>
        <TabBarItemIOS
          name="article"
          icon={{uri:'rectangle'}}
          title="文章"
          accessibilityLabel="article"
          selected={this.state.selectedTab === 'article'}
          onPress={() => {
            this.setState({
              selectedTab: 'article',
            });
          }}>
          <NavigatorIOS 
            style={styles.container}
            initialRoute={{
              title: '文章',
              component: NewestArticle
            }}/>
        </TabBarItemIOS>

      </TabBarIOS>
    )
  }
})

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  container: {
    flex: 1
  }
});


module.exports = TabBarNav;