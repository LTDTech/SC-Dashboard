var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  Track = require('./track'),
  SessionStore = require('../stores/sessionStore');

  var Follower = React.createClass({
      getInitialState: function() {
        return {followers: SessionStore.followers()}
      },
      componentDidMount: function() {
      },
      componentWillUnmount: function() {
        this.sessionStoreListener.remove();
      },
      onSessionChange: function() {
        this.setState({followers: SessionStore.followers()});
      },
    render: function(){
      return (
        <div className="main-follower">
          <div className="follower-pic-div">
            <img className="followerPic" src={this.props.follower.avatar_url} alt="Profile Picture"/>
          </div>
          <div className="follower-info">
            <div className="follower-name">
              <a href={this.props.follower.permalink_url}>{this.props.follower.username}
              </a>
            </div>
            <div className="follower-city">
              {this.props.follower.city}
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = Follower;
