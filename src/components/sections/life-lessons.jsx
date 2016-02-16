var React = require('react');
var Trash = require('../buttons/take-the-trash-out.jsx');
var MajorKey = require('../buttons/major-key.jsx');
var Breakfast = require('../buttons/breakfast.jsx');
var Lunch = require('../buttons/lunch.jsx');
var Door = require('../buttons/door.jsx');
var EnjoyLife = require('../buttons/enjoy-life.jsx');
var TrustMe = require('../buttons/trust-me-this-is-a-major-key.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <h2>Life Lessons</h2>
        </div>
        <div className="motivation">
          <MajorKey />
          <TrustMe />
          <Trash />
          <Breakfast />
          <Lunch />
          <Door />
          <EnjoyLife />
        </div>
      </div>
    )
  }
});
