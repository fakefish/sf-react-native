'use strict';

var React = require('react-native');
var Api = require('../../Network/api');
var ArticleDetail = require('./detail');
var Loading = require('../Common/loading');


var FakeApi = require('../../Network/fakeapi');

var {
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ActivityIndicatorIOS,
} = React;


var ArticleNewest = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    };
  },

  componentWillMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(FakeApi.getNewestArticles().data.rows),
    //   loaded: true
    // });
    fetch(Api.getNewestArticle())
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.rows),
          loaded: true
        });
      })
      .done();
  },

  render: function() {
    if(!this.state.loaded) {
      return (
        <Loading/>
      );
    }
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
    );
  },

  renderRow: function(rowData: string, sectionID: number) {
    return (
          <TouchableHighlight onPress={() => this.selectDetail(rowData.id)}>
            <View>
              <View style={{flexDirection:'row',flex:2}}>
                <View style={{}}>
                  <Text style={{fontWeight:'bold',fontSize:16}}>{rowData.title}</Text>
                  <Text numberOfLines={2}>{rowData.excerpt}</Text>
                </View>
                <Image 
                  style={{width:32,height:32}} 
                  source={{uri:'http:'+rowData.user.avatarUrl}}/>
              </View>
            </View>
          </TouchableHighlight>
    );
  },

  selectDetail: function(id) {
    this.props.navigator.push({
      component: ArticleDetail,
      passProps: {
        id: id
      }
    });
  }

});




module.exports = ArticleNewest;
