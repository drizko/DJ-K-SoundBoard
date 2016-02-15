var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={this.handleClick} >
          We The Best
        </button>
      </div>
    )
  },
  handleClick: function(){
    console.log("We the best");
    var clip = new Audio('../../../assets/we-the-best.ogg');

    clip.play()
  }
});
