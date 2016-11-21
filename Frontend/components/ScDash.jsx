var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  Navbar = require('./navbar'),
  SessionStore = require('../stores/sessionStore'),
  Footer = require('./footer'),
  AllTracks = require('./all-tracks'),
  Track = require('./track'),
  AllFollowers = require('./followers'),
  Follower = require('./follower'),
  UserPanel = require('./user-panel'),
  ClientAction = require('../actions/clientAction.js'),

  // GeoMap = require('./geo-map'),
  LandingPage = require('./landing-page');

var ScDash = React.createClass({
  getInitialState: function() {
    return {user: SessionStore.user()}
  },
  componentDidMount: function() {
    this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
    ClientAction.getUserData();
  },
  componentWillUnmount: function() {
    this.sessionStoreListener.remove();
  },
  onSessionChange: function() {
    this.setState({user: SessionStore.user()});
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
            <UserPanel user={this.state.user}/>
            <div className="followers-title">
              <h3>Your Followers
              </h3>
            </div>
            <div className="followers">
              <AllFollowers/>
            </div>
          </div>
          <div className="map">
          </div>
        </div>
        <div className="track-content-header">
          <h1>Track Activity</h1>
        </div>
        <div className="main-track-content">
          <AllTracks/>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = ScDash;
