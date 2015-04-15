'use strict';

var React = require('react-native');
var styles = require('../Style/question');
var Api = require('../../Network/api');
var QuestionDetail = require('./detail');
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


var QuestionNewest = React.createClass({

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
    // fake api
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(FakeApi.getNewestQuestion().data.rows),
    //   loaded: true,
    // })

    fetch(Api.getNewestQuestion())
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
            <View style={styles.container}>
              <View style={
                [styles.votes,
                (rowData.isAccepted?
                  {backgroundColor:'#808B87'}:
                  (rowData.answers==0?
                    {backgroundColor:'#AF3933'}:{}
                ))]}>
                <View style={{alignSelf:'center',paddingTop:3}}>
                  <Text style={{color:'#fff'}}>{rowData.answers}</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                  {rowData.isAccepted?(
                    <Text style={{color:'#fff',fontSize:12}}>解决</Text>
                  ):(
                    <Text style={{color:'#fff',fontSize:12}}>回答</Text>
                  )}
                  
                </View>
              </View>
              <View style={styles.question}>
                <View style={styles.questionInfo}>
                  <Text style={{color:'#999'}}>{rowData.user.name} &middot; {rowData.createdDate}</Text>
                </View>
                <View style={styles.questionTitle}>
                  <Text>{rowData.title}</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
    );
  },

  selectDetail: function(id) {
    this.props.navigator.push({
      component: QuestionDetail,
      passProps: {
        id: id
      }
    });
  }

});




module.exports = QuestionNewest;
