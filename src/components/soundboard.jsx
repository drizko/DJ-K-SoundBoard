var React = require('react');
var Inspirational = require('./sections/inspirational.jsx')
var Motivation = require('./sections/motivation.jsx')
var LifeLessons = require('./sections/life-lessons.jsx')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="major-heading">Major<span><img src="http://emojipedia-us.s3.amazonaws.com/cache/52/32/5232b6467439036bf58340a3d8347fc8.png"></img></span>Soundboard</h1>
        {/*<h1>DJ Khaled SoundBoard</h1>*/}
        <Inspirational />
        <Motivation />
        <LifeLessons />
      </div>
    )
  }
});
