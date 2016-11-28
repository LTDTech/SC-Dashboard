var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  SessionStore = require('../stores/sessionStore');

  var UserPanel = React.createClass({
    render: function(){
      return (
        <div className="p-f-f">
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
          <div className="follower-plays">
            <p className="follower-p">Tracks</p>
            <div className="pff-text">
              {this.props.user.track_count}
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = UserPanel;
