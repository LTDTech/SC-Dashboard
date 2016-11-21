var ServerAction = require('../actions/serverAction.js');

module.exports = {
  checkUsername: function(data) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/tracks/collidoscopemusic',
      method: 'GET',
      success: function(returnTracks) {
        hashHistory.push('dashboard');
      },
      error: function(error) {
        console.log(error.statusCode(), "User Not Found");
      }
    });
  },
  getTracks: function(data) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/tracks/collidoscopemusic',
      method: 'GET',
      success: function(returnTracks) {
        ServerAction.receivedTracks(returnTracks);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getFollowers: function(data) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/followers/insideoutpresents',
      method: 'GET',
      success: function(receivedFollowers) {
        ServerAction.receivedFollowers(receivedFollowers);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getUserData: function(data) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/collidoscopemusic',
      method: 'GET',
      success: function(receivedUser) {
        ServerAction.receivedUser(receivedUser);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  }
};
