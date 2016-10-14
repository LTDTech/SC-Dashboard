var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  LandingPage = require('./landing-page');

var SideNavBar = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};
    },insightsClick: function() {
      console.log("going to insights");
      hashHistory.push('/insights');
    },
    dashboardClick: function() {
      console.log("going to dashboard");
      hashHistory.push('/dashboard');
    }, 
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid leftNav">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand nav nav-tabs nav-stacked hover"onClick={this.dashboardClick}>Dashboard</div>
          <div className="navbar-brand nav nav-tabs nav-stacked hover">Login/Signup</div>
          <div className="navbar-brand nav nav-tabs nav-stacked hover"onClick={this.insightsClick}>Insights</div>
          <div className="navbar-brand nav nav-tabs nav-stacked class:hover">Brand</div>
        </div>
      </nav>
    );
  }
});

module.exports = SideNavBar;
