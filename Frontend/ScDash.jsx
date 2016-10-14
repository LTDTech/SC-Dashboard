var React = require('react'),
ReactDOM = require('react-dom'),
hashHistory = require('react-router').hashHistory,
  LandingPage = require('./landing-page');

var ScDash = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};
    },
  render: function(){
    return (
      <div className="mainDiv">
        <div className="dashHeader">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
});

module.exports = ScDash;
