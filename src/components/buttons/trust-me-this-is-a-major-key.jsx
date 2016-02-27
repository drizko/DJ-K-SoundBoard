var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >Trust Me</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/trust-me-this-is-a-major-key.mp3');

    clip.play()
  }
});
