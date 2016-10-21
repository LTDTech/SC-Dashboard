var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory;

var Insights = React.createClass({
  render: function() {
    return(
      <div>
        <div className="mainIns">
          <h1>Insights</h1>
        </div>
      </div>
    );
  }
});

module.exports = Insights;
