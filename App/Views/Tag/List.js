'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var TagList = React.createClass({
    render: function() {
      return (
        <View style={styles.container}>
          {this.props.data.map(function(tag){
            return (
              <View style={styles.tagBlock}>
                <Text style={styles.tag}>{tag.name}</Text>
              </View>
            );
          })}
        </View>
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
  },
  tagBlock: {
    backgroundColor:'#e7f2ed',
    padding:3,
    marginRight:3,
  },
  tag: {
    color:'#017E66',
    fontSize:12
  },
})

module.exports = TagList;