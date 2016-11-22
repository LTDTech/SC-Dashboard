var React = require('react'),
  ReactDOM = require('react-dom'),
  ClientAction = require('../actions/clientAction.js'),
  Track = require('./track'),
  SessionStore = require('../stores/sessionStore');

  var AllTracks = React.createClass({
      getInitialState: function() {
        return {tracks: SessionStore.tracks()}
      },
      componentDidMount: function() {
        this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
        ClientAction.getTracks();
      },
      componentWillUnmount: function() {
        this.sessionStoreListener.remove();
      },
      onSessionChange: function() {
        this.setState({tracks: SessionStore.tracks()});
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
