var SessionApi = require('../util/sessionApi'),
    Dispatcher = require('../dispatcher/dispatcher'),
    UserApi = require('../util/userApi');


module.exports = {
  getUserData: function (user) {
      UserApi.getUserData(user);
   }
};
