var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {

  createUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
      user: user
    });
  },
  receivedUsers: function(users) {
    Dispatcher.dispatch({
      actionType: "receivedUsers",
      data: users
    });
  }
};
