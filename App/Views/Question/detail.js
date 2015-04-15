'use strict';

var React = require('react-native');
var styles = require('../Style/question-detail');
var Api = require('../../Network/api');
var Loading = require('../Common/loading');
var Tags = require('../Tag/list');
var Markdown = require('../Common/Markdown');
var AnswerCell = require('./answer');

var FakeApi = require('../../Network/fakeapi');

var {
  Image,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  ActivityIndicatorIOS,
  ScrollView,
  TouchableHighlight
} = React;

var QuestionDetail = React.createClass({
  getInitialState: function() {
    return {
      questionLoaded: false,
      answersLoaded: false,
    };
  },
  componentWillMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    // this.setState({
    //   question: FakeApi.getQuestionDetail().data,
    //   questionLoaded: true
    // });
    // this.setState({
    //   answers: FakeApi.getAnswerDetail().data,
    //   answersLoaded: true
    // });
    fetch(Api.getQuestionDetail(this.props.id))
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          question: responseData.data,
          questionLoaded: true
        });
      })
      .done();
    fetch(Api.getAnswers(this.props.id))
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          answers: responseData.data,
          answersLoaded: true
        });
      })
      .done();
  },
  render: function() {
    return (
      <View 
        style={styles.container}>
        <ScrollView style={{width:300}}>
          {this.renderQuestion()}
          {this.renderAnswers()}
        </ScrollView>
      </View>
    );
  },
  renderQuestion: function() {
    if(this.state.questionLoaded) {
      return (
        <View>
          <View style={styles.detailTop}>
            <Text style={styles.questionTitle}>{this.state.question.title}</Text>
              <View style={styles.questionInfo}>
                <Text style={{fontSize:13,color:'#009A61'}}>{this.state.question.user.name}</Text>
                <Text style={{fontSize:13}}> {this.state.question.user.rank}</Text>
                <Text style={{color:'#999'}}> &middot; {this.state.question.createdDate}</Text>
              </View>
          </View>
          <View style={styles.questionContent}>
            <Text>{this.state.question.originalText}</Text>
          </View>
          <Tags data={this.state.question.tags} />
          <View style={styles.questionMenu}>
            <Text style={{fontSize:18}}>{this.state.question.answers}个回答</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View 
          style={{flex:1,marginTop:50}}>
          <Loading/>
        </View>
      );
    }
  },
  renderAnswers: function() {
    if(this.state.answersLoaded) {
      return (
        <View>
          {this.renderAcceptedAnswer()}
          {this.renderAvailableAnswers()}
          {this.renderIgnoredAnswers()}
        </View>
      );
    } else {
      return (
        <View 
          style={{flex:1,marginTop:50}}>
          <Loading/>
        </View>
      );
    }
  },
  renderAcceptedAnswer: function() {
    if(this.state.answers.accepted) {
      return (
        <AnswerCell 
          isAccepted='true' 
          answer={this.state.answers.accepted}/>
      );
    }
    return (
      <View></View>
    );
  },
  renderAvailableAnswers: function() {
    return (
      this.state.answers.available.map((answer)=> {
        return (
          <AnswerCell answer={answer}/>
        )
      })
    );
  },
  renderIgnoredAnswers: function() {
    return (
      this.state.answers.ignored.map((answer)=> {
        return (
          <AnswerCell 
            isIgnored='true' 
            answer={answer}/>
        )
      })
    );
  }
})

module.exports = QuestionDetail;