var ServerAction = require('../actions/serverAction.js');

module.exports = {
  getUserData: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/' + name,
      method: 'GET',
      success: function(receivedUser) {
        hashHistory.push('dashboard');
        ServerAction.receivedUser(receivedUser);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getTracks: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/tracks/' + name,
      method: 'GET',
      success: function(returnTracks) {
        ServerAction.receivedTracks(returnTracks);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getFollowers: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/followers/' + name,
      method: 'GET',
      success: function(receivedFollowers) {
        ServerAction.receivedFollowers(receivedFollowers);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getUserInfo: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/filtered/' + name,
      method: 'GET',
      success: function(userInfo) {
        ServerAction.receivedUserInfo(userInfo);
        console.log(name, "here's the username");
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  }
};
