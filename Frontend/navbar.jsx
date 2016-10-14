var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  LandingPage = require('./landing-page');

var NavBar = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};
    },
  render: function(){
    return (
      <div className="mainNav">
        <nav className="navbar navbar-default topNav">
            <div className="navbar-header topNavLeft">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="logo" href="/index.html"><img className="logo" src='../img/wysidio.jpg'></img></a>
            </div>
            <div className="topNavRight">
              <a className="navbar-brand" href="#">Sign Up</a>
              <a className="navbar-brand" href="#">Login</a>
            </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
