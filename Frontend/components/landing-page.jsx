var React = require('react'),
ReactDOM = require('react-dom'),
hashHistory = require('react-router').hashHistory;

var LandingPage = React.createClass({
  render: function() {
    return(
      <div>
        <div className="mainLand">
          <h1>Landing Page</h1>
          <div className="scLogin">
            <button className="scButton">
              <div className="scButton2">
                <div className="scButton3">GET STARTED</div>
                <img className="scIcon scButton3" src="../img/scicon3.jpg"></img>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
