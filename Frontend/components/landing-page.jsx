var React = require('react'),
ReactDOM = require('react-dom'),
ClientAction = require('../actions/clientAction.js'),
Footer = require('./footer'),
hashHistory = require('react-router').hashHistory;

var LandingPage = React.createClass({
  getUserData() {
    ClientAction.getUserData();
  }
  ,
  render: function() {
    return(
      <div>
        <div className="mainLand">
          <div className="scLogin">
            <button className="scButton" onClick={this.getUserData}>
              <div className="scButton2">
                <img className="scIcon scButton3" src="../img/scicon4.png"></img>
                <h3 className="get-started">Get Started</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
