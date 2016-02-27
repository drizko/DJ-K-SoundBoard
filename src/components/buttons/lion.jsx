var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >Lion</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/lion.mp3');

    clip.play()
  }
});
