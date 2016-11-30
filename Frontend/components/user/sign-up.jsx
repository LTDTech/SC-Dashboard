var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  Navbar = require('../navbar'),
  SessionStore = require('../../stores/sessionStore'),
  Footer = require('../footer'),
  ClientAction = require('../../actions/clientAction.js');

var SignUpPage = React.createClass({
  render: function(){
    return (
      <div className="main-signup">
        <Navbar/>
        <div className="signup-body">
        <form className="signup-form">
          <div className="login-h3">
            <p className="sign-up-header">Sign Up</p>
          </div>
          <br/>
            <input type="text"
              className="w-form-textbox w-un-Input"
              // value={this.state.username}
              // onChange={this.onChange}
              placeholder="Username"
              id="email" />
            <input type="text"
              className="w-form-textbox w-pw-Input"
              // value={this.state.password}
              // onChange={this.onChange}
              placeholder="Password"
              id="password"/>
            <input type="text"
              className="w-form-textbox w-pw-Input"
              // value={this.state.password}
              // onChange={this.onChange}
              placeholder="Retype Password"
              id="password"/>
            <input type="text"
              className="w-form-textbox w-pw-Input"
              // value={this.state.password}
              // onChange={this.onChange}
              placeholder="Email"
              id="password"/>
            <input type="text"
              className="w-form-textbox w-pw-Input"
              // value={this.state.password}
              // onChange={this.onChange}
              placeholder="Artist Name"
              id="password"/>
            <input type="text"
              className="w-form-textbox w-pw-Input"
              // value={this.state.password}
              // onChange={this.onChange}
              placeholder="First name"
              id="password"/>
            <input type="text"
              className="w-form-textbox w-pw-Input"
              // value={this.state.password}
              // onChange={this.onChange}
              placeholder="Last name"
              id="password"/>
          <br/>
          <div className="w-login-button">
            <button className="btn btn-info w-l-button">SIGN UP
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

module.exports = SignUpPage;
