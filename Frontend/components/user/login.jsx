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
                // value={this.state.username}
                // onChange={this.onChange}
                placeholder="Email"
                id="email" />
              <input type="text"
                className="w-form-textbox w-pw-Input"
                // value={this.state.password}
                // onChange={this.onChange}
                placeholder="Password"
                id="password"/>
            <br/>
            <div className="w-login-button">
              <button className="btn w-l-button btn-info">LOG IN
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
