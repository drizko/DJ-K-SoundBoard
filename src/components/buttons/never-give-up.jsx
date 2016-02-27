var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >Never Give Up</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/never-give-up.mp3');

    clip.play()
  }
});
