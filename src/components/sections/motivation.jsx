var React = require('react');
var DontEverPlayYourself1 = require('../buttons/dont-ever-play-yourself1.jsx');
var DontEverPlayYourself2 = require('../buttons/dont-ever-play-yourself2.jsx');
var Congradulations = require('../buttons/congradulations.jsx');
var Lion = require('../buttons/lion.jsx');
var BlessUp = require('../buttons/bless-up.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className='titles'>
          Motivation
        </div>
        <div className="motivation">
          <DontEverPlayYourself1 />
          <DontEverPlayYourself2 />
          <Congradulations />
          <BlessUp />
          <Lion />
        </div>
      </div>
    )
  }
});
