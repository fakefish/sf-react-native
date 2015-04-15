var React = require('react-native');
var {
  StyleSheet
} = React;
module.exports = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  question: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  votes: {
    backgroundColor: '#009A61',
    width: 35,
    height: 40,
    borderRadius: 3,
  },
  text: {
    flex: 1,
  },
});