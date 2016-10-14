var React = require('react'),
ReactDOM = require('react-dom'),
hashHistory = require('react-router').hashHistory;

var LandingPage = React.createClass({
  render: function() {
    return(
      <div>
        <div className="mainLand">
          <h1>Landing Page</h1>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
