

'use strict';

var React = require('react-native');
var TabNav = require('./App/Views/Common/TabNav');

var {
  AppRegistry,
} = React;

var sfrct = React.createClass({
  render: function() {
    return (
      <TabNav />

    );
  }
});


AppRegistry.registerComponent('sfrct', () => sfrct);
