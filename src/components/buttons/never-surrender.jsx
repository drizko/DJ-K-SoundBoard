var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >Never Surrender</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/never-surrender.mp3');

    clip.play()
  }
});
