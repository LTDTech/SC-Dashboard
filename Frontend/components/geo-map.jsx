var React = require('react'),
  ScDash = require('./ScDash'),
  ReactDOM = require('react-dom');

var GeoMap = React.createClass({
  componentDidMount: function() {
    $('#map').vectorMap({map: 'us_aea'});
  },
  getInitialState: function() {
    return {user: SessionStore.user(),
    username: SessionStore.getUsername()};
  },
  onSessionChange: function() {
    
  },
  render: function(){
    return (
      <div className="map">
      </div>
    );
  }
});

module.exports = GeoMap;
