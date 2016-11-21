var React = require('react'),
  ScDash = require('./ScDash'),
  LandingPage = require('./landing-page'),
  Insights = require('./insights'),
  hashHistory = require('react-router').hashHistory,
  ReactDOM = require('react-dom'),
  NavBar = require('./navbar'),
  Footer = require('./footer'),
  // GeoMap = require('./geo-map'),
  SideNavBar = require('./sideNav'),
  AllTracks = require('./all-tracks'),
  AllFollowers = require('./followers'),
  UserPanel = require('./user-panel'),
  Follower = require('./follower');

var App = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};

    },
    insightsClick: function() {
      console.log("going to insights");
      hashHistory.push('/insights');
    },
    dashboardClick: function() {
      console.log("going to dashboard");
      hashHistory.push('/dashboard');
    },
  render: function(){
    return (
      <div className="mainDiv">
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
