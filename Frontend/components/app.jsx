var React = require('react'),
  ScDash = require('./ScDash'),
  LandingPage = require('./landing-page'),
  Insights = require('./insights'),
  Login = require('./login'),
  hashHistory = require('react-router').hashHistory,
  ReactDOM = require('react-dom'),
  NavBar = require('./navbar'),
  Footer = require('./footer'),
  LoggedIn = require('./logged-in'),
  // GeoMap = require('./geo-map'),
  SideNavBar = require('./sideNav');

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
