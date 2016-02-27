var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >
          Door
        </button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/door.mp3');

    clip.load();
    clip.play()
  }
});
