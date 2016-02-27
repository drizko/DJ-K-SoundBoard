var React = require('react');
var YouSmart = require('../buttons/you-smart.jsx');
var YouVerySmart = require('../buttons/you-very-smart.jsx');
var WeTheBest = require('../buttons/we-the-best.jsx');
var YouAGenius = require('../buttons/you-a-genius.jsx');
var IAppreciateYou = require('../buttons/i-appreciate-you.jsx');
var YouLoyal = require('../buttons/you-loyal.jsx');
var NeverGiveUp = require('../buttons/never-give-up.jsx');
var NeverSurrender = require('../buttons/never-surrender.jsx');
var BuyYourMomAHouse = require('../buttons/buy-your-mom-a-house.jsx');
var BuyYourFamilyAHouse = require('../buttons/buy-your-whole-family-houses.jsx');
var AnotherOne1 = require('../buttons/another-one1.jsx');
var AnotherOne2 = require('../buttons/another-one2.jsx');
var AndAnotherOne = require('../buttons/and-another-one.jsx');
var LongAnotherOne = require('../buttons/long-another-one.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className='titles'>
          Inspiration
        </div>
        <div className="inspiration">
          <YouSmart />
          <YouVerySmart />
          <WeTheBest />
          <YouAGenius />
          <IAppreciateYou />
          <YouLoyal />
          <NeverGiveUp />
          <NeverSurrender />
          <BuyYourMomAHouse />
          <BuyYourFamilyAHouse />
          <AnotherOne1 />
          <AnotherOne2 />
          <AndAnotherOne />
          <LongAnotherOne />
        </div>
      </div>
    )
  }
});
