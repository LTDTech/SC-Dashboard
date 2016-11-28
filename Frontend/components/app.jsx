var React = require('react'),
  ScDash = require('./ScDash'),
  LandingPage = require('./landing-page'),
  Insights = require('./insights'),
  hashHistory = require('react-router').hashHistory,
  ReactDOM = require('react-dom'),
  NavBar = require('./navbar'),
  Footer = require('./footer'),
  SideNavBar = require('./sideNav'),
  AllTracks = require('./all-tracks'),
  AllFollowers = require('./followers'),
  UserPanel = require('./user-panel'),
  GeoMap = require('./geo-map'),
  Login = require('./user/login'),
  SignUpPage = require('./user/sign-up'),
  Follower = require('./follower');

var App = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};
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
