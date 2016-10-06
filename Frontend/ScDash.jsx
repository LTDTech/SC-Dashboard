var React = require('react'),

  LoginWindow = require('./login');

var ScDash = React.createClass({
    getInitialState: function() {
      return {}
    },
  render: function(){
    return (
      <div className="mainDiv">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Wysidio</a>
                <a className="navbar-brand" href="#">Signup / Login</a>
                <a className="navbar-brand" href="#">Brand</a>
                <a className="navbar-brand" href="#">Brand</a>
              </div>
            </div>
        </nav>
        <LoginWindow/>

      </div>
    );
  }
});

module.exports = ScDash;
