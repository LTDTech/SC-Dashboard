var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  LandingPage = require('./landing-page');

var Footer = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};
    },
  render: function(){
    return (
      <div className="footer">
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
        </nav>
      </div>
    );
  }
});

module.exports = Footer;
