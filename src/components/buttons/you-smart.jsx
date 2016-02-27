var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >
          You Smart
        </button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/you-smart.mp3');

    clip.play()
  }
});
