var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  Navbar = require('../navbar'),
  SessionStore = require('../../stores/sessionStore'),
  Footer = require('../footer'),
  ClientAction = require('../../actions/clientAction.js');

var Login = React.createClass({
  signUpClick() {
    hashHistory.push('/signup');
  },
  loginClick() {
    // var data = {"username": this.state.username, "password": this.state.password};
    // clienAction.userLogin(data);
  },
  render: function(){
    return (
      <div className="main-login">
        <Navbar/>
        <div className="login-body">
          <form className="name-form">
            <div className="login-h3">
              <p className="login-header">Log In</p>
              <a className="or-sign-up" onClick={this.signUpClick}>Or, Sign Up</a>
            </div>
            <br/>
              <input type="text"
                className="w-form-textbox w-un-Input"

                placeholder="Email"
                id="email" />
              <input type="text"
                className="w-form-textbox w-pw-Input"

                placeholder="Password"
                id="password"/>
            <br/>
            <div className="w-login-button">
              <button onClick={this.loginClick} className="btn w-l-button btn-info">LOG IN
              </button>
            </div>
            <div className="checkbox">
              <label className="remember-user"><input type="checkbox" value=""/>Remember Me</label>
              <a className="forgot" href="">Forgot password?</a>
            </div>
          </form>
		    </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Login;
