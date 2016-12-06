var React = require('react'),
  ReactDOM = require('react-dom'),
  hashHistory = require('react-router').hashHistory,
  Navbar = require('./navbar'),
  SessionStore = require('../stores/sessionStore'),
  Footer = require('./footer'),
  ClientAction = require('../actions/clientAction.js');

var Services = React.createClass({
  render: function(){
    return (
      <div className="main-services">
        <Navbar/>
        <div className="services-body">
          <div className="services-h-pic">
            <img className="header-pic" src="./img/musicstudio.jpeg"/>
          </div>
          <h1 className="services-header">Artist Services
          </h1>
          <div className="artist-services-div">
            <div className="artist-service">
              <h5>Fan Retention
              </h5>
              <p className="service-text">It can be hard to manage retaining and engaging your current fans while also expanding your growing fanbase. We can help you utilize data to create a clear path to growth.
              </p>
            </div>
            <div className="artist-service">
              <h5>Awareness
              </h5>
              <p className="service-text">"Build and they will come" does not work always in this current oversaturated market. Focus on your creating quality music and let us handle getting it into the right ears.
              </p>
            </div>
            <div className="artist-service">
              <h5>Revenue
              </h5>
              <p className="service-text">Are you still working a job that is getting in the way of you creating and performing? “Starving artist” is a phase, not a lifestyle. Let’s create a plan on how we can make performing and creating your 9 to 5.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Services;
