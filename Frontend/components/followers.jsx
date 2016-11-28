var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  Track = require('./track'),
  SessionStore = require('../stores/sessionStore'),
  Follower = require('./follower');

  var AllFollowers = React.createClass({
      getInitialState: function() {
        return {followers: SessionStore.followers(),
        user: SessionStore.user(),
        username: SessionStore.getUsername()};
      },
      componentDidMount: function() {
        this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
      },
      componentWillUnmount: function() {
        this.sessionStoreListener.remove();
      },
      onSessionChange: function() {
        this.setState({followers: SessionStore.followers(),
        user: SessionStore.user(),
        username: SessionStore.getUsername()});
      },
    render: function(){
      var renderFollowers = [];
      var that = this;
      this.state.followers.forEach(function(follower){
        renderFollowers.push(<Follower className="main-follower" follower={follower} key={follower.id}/>)
      });
      return (
        <div className="all-followers">
          { renderFollowers }
        </div>
      );
    }
  });

  module.exports = AllFollowers;
