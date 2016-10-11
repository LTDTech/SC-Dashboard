var React = require('react');

var LoginWindow = React.createClass({
  render: function () {
    return(
      <div>
        <div className="loginBox form-inline container">
          <div className="login2">
            <h2>Allow “Wysidio” access to your SoundCloud account?</h2>
            <div className="connectForm">
              <form>
                <br/>
                  <div className="formbox">
                    <input type="text"
                      className="form-textbox"
                      // value={this.state.username}
                      // onChange={this.onChange}
                      placeholder="Your email address"
                      id="username" />
                  </div>
                <br/>
                <br/>
                  <div className="formbox">
                    <input type="password"
                      className="form-textbox"
                      // value={this.state.username}
                      // onChange={this.onChange}
                      placeholder="Your password"
                      id="password" />
                  </div>
                <br/>
                <div className="cancelLogin">
                  <input className="cancel-login-button btn" type="submit" value="Cancel"/>
                  <input className="login-button btn" type="submit" value="Connect"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginWindow;
