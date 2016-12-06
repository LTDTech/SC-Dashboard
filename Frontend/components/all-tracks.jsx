var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  Track = require('./track'),
  SessionStore = require('../stores/sessionStore');

  var AllTracks = React.createClass({
      getInitialState: function() {
        return {tracks: SessionStore.tracks(),
        user: SessionStore.user(),
        username: SessionStore.getUsername()};
      },
      componentDidMount: function() {
        this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
        ClientAction.getTracks(this.state.username);
      },
      componentWillUnmount: function() {
        this.sessionStoreListener.remove();
      },
      onSessionChange: function() {
        this.setState({tracks: SessionStore.tracks()});
      },
      convertWaveForm (old_waveform) {
        return old_waveform.replace(/(wis)/i, 'w1').replace(/(json)/i,'png');
      },
    render: function(){
      var renderTracks = [];
      var that = this;
      this.state.tracks.forEach(function(track){
        renderTracks.push(<Track className="main-track" track={track} key={track.id}/>)
      });
      return (
        <div className="all-tracks">
          { renderTracks }
        </div>
      );
    }
  });

  module.exports = AllTracks;
