var React = require('react'),
ReactDOM = require('react-dom'),
ClientAction = require('../actions/clientAction.js'),
Footer = require('./footer'),
SessionStore = require('../stores/sessionStore'),
hashHistory = require('react-router').hashHistory;

var LandingPage = React.createClass({
  getUserData() {
    var name = $('.userNameInput').val()
    console.log(name);
    SessionStore.setUser(name);
    ClientAction.getUserData(name);
  }
  ,
  render: function() {
    return(
      <div className="mainLand">
        <div className="scLogin">
          <div className="login-contents">
            <img className="land-logo" src="./img/wysidio.jpg"></img>
          </div>
          <div className="sc-name-input">
            <form className="sc-name-form">
              <br/>
                <input type="text"
                  className="form-textbox userNameInput"
                  // value={this.state.username}
                  // onChange={this.onChange}
                  placeholder="Your Soundcloud Username"
                  id="username" />
              <br/>
            </form>
            <button className="scButton" onClick={this.getUserData}>
              <div className="scButton2">
                <img className="scIcon scButton3" src="./img/scicon4.png"></img>
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
