var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  Track = require('./track'),
  SessionStore = require('../stores/sessionStore'),
  Follower = require('./follower');

  var AllFollowers = React.createClass({
      getInitialState: function() {
        return {followers: SessionStore.followers()}
      },
      componentDidMount: function() {
        this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
        ClientAction.getFollowers();
      },
      componentWillUnmount: function() {
        this.sessionStoreListener.remove();
      },
      onSessionChange: function() {
        this.setState({followers: SessionStore.followers()});
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
