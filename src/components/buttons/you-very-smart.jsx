var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >
          You Very Smart
        </button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/you-very-smart.mp3');

    clip.play()
  }
});
