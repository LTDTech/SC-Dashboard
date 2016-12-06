var React = require('react'),
  ReactDOM = require('react-dom'),
  ReactDOM = require('react-dom');

var Insights = require('./components/insights'),
  LandingPage = require('./components/landing-page'),
  App = require('./components/app'),
  ScDash = require('./components/ScDash'),
  Login = require('./components/user/login'),
  Services = require('./components/services'),
  About = require('./components/about'),
  Team = require('./components/team'),
  SignUpPage = require('./components/user/sign-up');

// import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

  Router
  var ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route;
      IndexRoute = ReactRouter.IndexRoute,
      hashHistory = require('react-router').hashHistory;

  var RouterComponent = (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path="dashboard" component={ScDash}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="services" component={Services}/>
        <Route path="about" component={About}/>
        <Route path="team" component={Team}/>
      </Route>
    </Router>
  );

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(RouterComponent, document.getElementById('root'));
});
