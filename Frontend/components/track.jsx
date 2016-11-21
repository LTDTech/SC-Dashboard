var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  SessionStore = require('../stores/sessionStore');

  var Track = React.createClass({
      getInitialState: function() {
        return {tracks: SessionStore.tracks()}
      },
      componentDidMount: function() {
        this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
        ClientAction.getTracks;
      },
      componentWillUnmount: function() {
        this.sessionStoreListener.remove();
      },
      onSessionChange: function() {
        this.setState({tracks: SessionStore.tracks()});
      },
    render: function(){
      return (
        <div className="main-track">
          <div className="track-pic">
            <img src={this.props.track.artwork_url} alt="Track Picture"/>
          </div>
          <div className="track-content">
            <div className="track-info">
              <div className="track-name">
                <div className="track-title">
                  <a href={this.props.track.permalink_url}>{this.props.track.title}</a>
                </div>
              </div>
              <div className="track-plays">
                <p className="track-text">Plays</p>
                <div className="track-react">
                  {this.props.track.playback_count}
                </div>
              </div>
              <div className="track-likes">
                <p className="track-text">Likes</p>
                <div className="track-react">
                  {this.props.track.favoritings_count}
                </div>
              </div>
              <div className="track-reposts">
                <img className="repost-img" src="../img/reposticon.png"/>
                <div className="track-react">
                  <p>#</p>
                </div>
              </div>
            </div>
            <div className="track-wav">
              <img className="waveform" src={this.props.track.waveform_url}/>
            </div>
          </div>
        </div>
      );
    }
  });

// this.props.track.##
  module.exports = Track;
