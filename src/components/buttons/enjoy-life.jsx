var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >Enjoy Life</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/enjoy-life.mp3');

    clip.play()
  }
});
