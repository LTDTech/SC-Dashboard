var Dispatcher = require('../dispatcher/dispatcher.js'),
    UserApi = require('../util/userApi.js');


module.exports = {
  getTracks: function(name) {
      UserApi.getTracks(name);
  },
  getFollowers: function(name) {
      UserApi.getFollowers(name);
  },
  getUserData: function(name) {
    UserApi.getUserData(name);
  },
  getUserInfo: function(username) {
    UserApi.getUserInfo(username);
  }
};
