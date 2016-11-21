var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  SessionStore = require('../stores/sessionStore');

  var UserPanel = React.createClass({
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
      var renderUser = [];
      var that = this;
      return (
        <div className="p-f-f">
          <div className="follower-plays">
            <p className="follower-p">Plays</p>
          </div>
          <div className="follower-followers">
            <p className="follower-p">Followers</p>
            <div className="pff-text">
              {this.props.user.followers_count}
            </div>
          </div>
          <div className="follower-following">
            <p className="follower-p">Following</p>
            <div className="pff-text">
              {this.props.user.followings_count}
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = UserPanel;
