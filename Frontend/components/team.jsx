var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  Navbar = require('./navbar'),
  SessionStore = require('../stores/sessionStore'),
  Footer = require('./footer'),
  ClientAction = require('../actions/clientAction.js');

var Team = React.createClass({
  render: function(){
    return (
      <div className="main-about">
        <Navbar/>
        <div className="about-body">
          <p>Team Page</p>
          <div className="about-pic">
          </div>
          <div className="about-text">
            <p> Filler Text.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Team;
