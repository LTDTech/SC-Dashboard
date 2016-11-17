var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {

  createUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
      user: user
    });
  },
  receivedUsers: function(data) {
    Dispatcher.dispatch({
      actionType: "receivedUsers",
      data: data
    });
  },
  receivedTracks: function(tracks) {
    Dispatcher.dispatch({
      actionType: "receivedTracks",
      data: tracks
    });
  }
};
