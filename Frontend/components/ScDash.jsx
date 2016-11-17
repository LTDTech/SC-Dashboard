var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  LoggedIn = require('./logged-in'),
  Navbar = require('./navbar'),
  SessionStore = require('../stores/sessionStore'),
  Footer = require('./footer'),

  // GeoMap = require('./geo-map'),
  LandingPage = require('./landing-page');

var ScDash = React.createClass({
    getInitialState: function() {
      return {tracks: SessionStore.allTracks()}
    },

  render: function(){
    return (
      <div className="main-Sc-Div">
        <Navbar/>
        <div className="dashHeader">
          <h1>Your Dashboard</h1>
        </div>
        <div className="follower-content">
          <div className="account-data">
            <div className="p-f-f">
              <div className="follower-plays">
                <p className="follower-p">Plays</p>
              </div>
              <div className="follower-followers">
                <p className="follower-p">Followers</p>
              </div>
              <div className="follower-following">
                <p className="follower-p">Following</p>
              </div>
            </div>
            <div className="followers">
            </div>
          </div>
          <div className="map">
          </div>
        </div>
        <div className="track-content-header">
          <h1>Track Activity</h1>
        </div>
        <div className="track-content">
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = ScDash;
