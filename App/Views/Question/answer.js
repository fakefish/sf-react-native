'use strict';

var React = require('react-native');
var styles = require('../Style/QuestionDetail');

var {
  Image,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableHighlight
} = React;

var answerCell = React.createClass({
  render: function() {
    var answer = this.props.answer;
    var isAccepted = this.props.isAccepted;
    var isIgnored = this.props.isIgnored;
    return (
      <View style={styles.answerItem}>
        {isIgnored?(
          <Text style={{color:'red'}}>该问题已被忽略</Text>
          ):(
          <View></View>
        )}
        <View style={{flexDirection: 'row',marginBottom:5}}>
          <Text style={{color:'#009A61',marginRight:10}}>{answer.user.name}</Text>
          <Text> {answer.user.rank} </Text>
          <Text>&middot; {answer.createdDate?answer.createdDate:answer.modifiedDate}</Text>
        </View>
        <View>
          <Text>{answer.originalText}</Text>
          {isAccepted?(
            <Text style={{color:'#009A61'}}>该问题已被采纳</Text>
            ):(
            <View></View>
          )}
        </View>
      </View>
    );
  }
});

module.exports = answerCell;