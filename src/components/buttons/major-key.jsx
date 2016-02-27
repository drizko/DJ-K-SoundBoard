var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >Major Key</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/major-key.mp3');

    clip.play()
  }
});
