var React = require('react'),
  ScDash = require('./ScDash'),
  ReactDOM = require('react-dom');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<ScDash/>, document.getElementById('root'));
});
