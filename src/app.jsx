var React = require('react');
var ReactDOM = require('react-dom');
var SoundBoard = require('./components/soundboard.jsx')

var App = React.createClass({
  render: function() {
    return <SoundBoard />
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.app'));
