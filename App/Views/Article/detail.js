'use strict';

var React = require('react-native');
var styles = require('../Style/ArticleDetail');
var Api = require('../../Network/api');
var Loading = require('../Common/Loading');
var Tags = require('../Tag/List');

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

var ArticleDetail = React.createClass({
  getInitialState: function() {
    return {
      articleLoaded: false,
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
    fetch(Api.getArticleDetail(this.props.id))
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          article: responseData.data,
          articleLoaded: true
        });
      })
      .done();

  },
  render: function() {
    return (
      <View 
        style={styles.container}>
        <ScrollView style={{width:300}}>
          {this.renderArticle()}
        </ScrollView>
      </View>
    );
  },
  renderArticle: function() {
    if(this.state.articleLoaded) {
      return (
        <View>
          <View style={styles.detailTop}>
            <Text style={styles.questionTitle}>{this.state.article.title}</Text>
              <View style={styles.questionInfo}>
                <Text style={{fontSize:13,color:'#009A61'}}>{this.state.article.user.name}</Text>
                <Text style={{fontSize:13}}> {this.state.article.user.rank}</Text>
                <Text style={{color:'#999'}}> &middot; {this.state.article.createdDate}</Text>
              </View>
          </View>
          <View style={styles.questionContent}>
            <Text>{this.state.article.originalText}</Text>
          </View>
          <Tags data={this.state.article.tags} />
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


})

module.exports = ArticleDetail;