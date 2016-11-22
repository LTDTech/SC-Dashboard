var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {

  createUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
      user: user
    });
  },
  receivedFollowers: function(followers) {
    Dispatcher.dispatch({
      actionType: "receivedFollowers",
      data: followers
    });
  },
  receivedTracks: function(tracks) {
    Dispatcher.dispatch({
      actionType: "receivedTracks",
      data: tracks
    });
  },
  receivedUser: function(user) {
    Dispatcher.dispatch({
      actionType: "receivedUserData",
      data: user
    });
  }
};
