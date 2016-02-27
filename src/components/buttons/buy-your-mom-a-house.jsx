var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >
          Buy Your Mom A House
        </button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/buy-your-mama-a-house.mp3');

    clip.play()
  }
});
