var React = require('react-native');
var {
  StyleSheet
} = React;
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  detailTop: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 10,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionInfo: {
    flexDirection: 'row',
    marginTop: 5,
  },
  questionContent: {
    padding: 10,
  },
  like: {
    height: 24,
    backgroundColor: '#f3f3f3',
    marginRight: 3,
    marginBottom: 10,
  },
  likeText: {
    color: '#999',
    padding: 5,
    fontSize: 13,
    textAlign: 'right',
  },
  questionMenu: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#979797',
  },
  answerItem: {
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
});