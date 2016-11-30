var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  LandingPage = require('./landing-page');

var NavBar = React.createClass({
    loginClick() {
      hashHistory.push('/login');
    },
    logoClick() {
      hashHistory.push('/dashboard');
    },
    signUpClick() {
      hashHistory.push('/signup');
    },
    servicesClick() {
      hashHistory.push('/services');
    },
    aboutClick() {
      hashHistory.push('/about');
    },
  render: function(){
    return (
      <div className="mainNav">
        <nav className="navbar navbar-default topNav">
          <div className="navbar-header topNavLeft">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a onClick={this.logoClick} className="logo"><img className="logo" src='../img/wysidio.jpg'></img></a>
          </div>
          <div className="topNavRight">
            <div>
              <a className="loginLink navbar-brand" onClick={this.loginClick}>LOGIN
              </a>
              <a className="loginLink navbar-brand" onClick={this.signUpClick}>SIGN UP
              </a>
              <a className="loginLink navbar-brand" onClick={this.servicesClick}>SERVICES
              </a>
              <a className="loginLink navbar-brand" onClick={this.aboutClick}>ABOUT
              </a>
            </div>
            <div className="btn-group navButton">
              <button type="button" className="navButton btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="userPro navButton" src='../img/userprofilepic.jpg'></img><span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Profile</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
