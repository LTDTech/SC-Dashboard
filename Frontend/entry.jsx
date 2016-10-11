var React = require('react'),
  ReactDOM = require('react-dom'),
  ScDash = require('./ScDash'),
  ReactDOM = require('react-dom');

// import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

  //Router
  var ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route;

  // var RouterComponent = (
  //
  // );

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<ScDash/>, document.getElementById('root'));
});
