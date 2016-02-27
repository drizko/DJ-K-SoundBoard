var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >
          Another One (1)
        </button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/another-one1.mp3');

    clip.play()
  }
});
