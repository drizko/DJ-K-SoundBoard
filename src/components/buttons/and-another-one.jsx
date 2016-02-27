var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn clip-button" onClick={this.handleClick} >And Another One</button>
      </div>
    )
  },
  handleClick: function(){
    var clip = new Audio('../../../assets/clips/and-another-one.mp3');

    clip.play()
  }
});
