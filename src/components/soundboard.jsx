var React = require('react');
var Inspirational = require('./sections/inspirational.jsx')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>DJ Khaled SoundBoard</h1>
        <Inspirational />
      </div>
    )
  }
});
