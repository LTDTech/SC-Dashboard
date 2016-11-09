var React = require('react'),
  ScDash = require('./ScDash'),
  LandingPage = require('./landing-page'),
  Insights = require('./insights'),
  Login = require('./login'),
  hashHistory = require('react-router').hashHistory,
  ReactDOM = require('react-dom'),
  NavBar = require('./navbar'),
  Footer = require('./footer'),
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
        <NavBar/>
          <div className="row">
            <div className="col-sm-2">
              <SideNavBar/>
            </div>
            <div className="col-sm-10">
              {this.props.children}
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
