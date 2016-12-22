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
  GeoMap = require('./geo-map'),
  LandingPage = require('./landing-page');

var ScDash = React.createClass({
  getInitialState: function() {
    return {user: SessionStore.user(),
    username: SessionStore.getUsername(),
    followers: SessionStore.getCoordinates()};
  },
  componentDidMount: function() {
    this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
    ClientAction.getUserInfo(this.state.username);
    ClientAction.getFollowers(this.state.username);
    $(function(){
      $('.map').vectorMap({map: 'us_aea'});
    });
  },
  onSessionChange: function() {
    this.setState({user: SessionStore.user(),
    followers: SessionStore.getCoordinates(),
    username: SessionStore.getUsername()});

    // if (this.state.followers !== null) {
    //   $('.map').vectorMap({
    //     map: 'us_aea_en',
    //     markers: data.metro.coords,
    //     series: {
    //       markers: [{
    //         attribute: 'fill',
    //         scale: ['#FEE5D9', '#A50F15'],
    //         values: data.metro.unemployment[val],
    //         min: jvm.min(metroUnemplValues),
    //         max: jvm.max(metroUnemplValues)
    //       },{
    //         attribute: 'r',
    //         scale: [5, 20],
    //         values: data.metro.population[val],
    //         min: jvm.min(metroPopValues),
    //         max: jvm.max(metroPopValues)
    //       }],
    //       regions: [{
    //         scale: ['#DEEBF7', '#08519C'],
    //         attribute: 'fill',
    //         values: data.states[val],
    //         min: jvm.min(statesValues),
    //         max: jvm.max(statesValues)
    //       }]
    //     }
    //     //...
    //   });
    // }

  },
  render: function(){
    var renderFollowers = [];
    var that = this;
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
          <div className="the-map">
            <GeoMap/>
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
