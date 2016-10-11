var React = require('react'),
  LoginWindow = require('./login');

var ScDash = React.createClass({
    getInitialState: function() {
      return {loggedIn: false};
    },
  render: function(){
    return (
      <div className="mainDiv">
        <nav className="navbar navbar-default">
          <div className="container-fluid nav-stacked">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Wysidio</a>
              </div>
            </div>
        </nav>
        <div className="belowMain">
          <div className="row">
            <div className="col-sm-2">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand nav nav-tabs nav-stacked" href="#">Insights</a>
                      <a className="navbar-brand nav nav-tabs nav-stacked" href="#">Brand Traction</a>
                      <a className="navbar-brand nav nav-tabs nav-stacked" href="#">Brand</a>
                      <a className="navbar-brand nav nav-tabs nav-stacked" href="#">Brand</a>
                    </div>
                  </div>
              </nav>
            </div>
              <div className="col-sm-10">
                <div className="dashText">
                  <h1>Dashboard</h1>
                </div>
                <LoginWindow/>
              </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ScDash;
