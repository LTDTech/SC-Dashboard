var Dispatcher = require('../dispatcher/dispatcher.js'),
    UserApi = require('../util/userApi.js');


module.exports = {
  getTracks: function() {
      UserApi.getTracks();
  },
  checkUsername: function() {
      UserApi.checkUsername();
  },
  getFollowers: function() {
      UserApi.getFollowers();
  },
  getUserData: function() {
    UserApi.getUserData();
  }
};
