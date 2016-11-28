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
        <nav className="navbar navbar-default bottom-Nav">
          <div className="navbar-header">
            <div className="footer-logo-div">
              <img className="footer-logo" src='../img/wysidio.jpg'>
              </img>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Footer;
