var React = require('react'),
  ReactDOM = require('react-dom'),
  ReactDOM = require('react-dom');

var Insights = require('./insights'),
  LandingPage = require('./landing-page'),
  App = require('./app'),
  ScDash = require('./ScDash');
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
        <Route path="insights" component={Insights}/>
      </Route>
    </Router>
  );

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(RouterComponent, document.getElementById('root'));
});
