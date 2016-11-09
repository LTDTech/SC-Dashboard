var Dispatcher = require('../dispatcher/dispatcher.js'),
    UserApi = require('../util/userApi.js');


module.exports = {
  getUserData: function(user) {
      UserApi.getUserData(user);
   }
};
