var React = require('react'),
  ScDash = require('./ScDash'),
  ReactDOM = require('react-dom');

var GeoMap = React.createClass({
  componentDidMount: function() {
    $('#map').vectorMap({map: 'us_aea'});
  },
  render: function(){
    return (
      <div className="map">
      </div>
    );
  }
});

module.exports = GeoMap;
