var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/tracks.js');
var myStorage = localStorage;
var SessionStore = new Store(Dispatcher);

var _username = JSON.parse(myStorage.getItem("userName"));
var _authenticationErrors = [];
var _loggedIn = false;

var _tracks = [];
var _followers = [];
var _user = [];

SessionStore.setUser = function (name) {
  myStorage.setItem("userName", JSON.stringify(name));
  _username = name;
}

SessionStore.tracks = function () {
  return _tracks;
}
SessionStore.followers = function () {
  return _followers;
}
SessionStore.user = function () {
  return _user;
}
SessionStore.getUsername = function () {
  if (myStorage.getItem("userName") === "false"){
    return null;
  } else {
    return _username;
  }
}
var receivedFollowers = function(receivedFollowers) {
  _followers = receivedFollowers;
  SessionStore.__emitChange();
};

var receivedTracks = function(receivedTracks) {
  _tracks = receivedTracks;
  SessionStore.__emitChange();
};
var receivedUserData = function(receivedUserData) {
  console.log(receivedUserData);
  _user = receivedUserData;
  SessionStore.__emitChange();
};
var receivedUserInfo = function(userData) {
  _user = userData;
  SessionStore.__emitChange();
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "receivedFollowers":
      receivedFollowers(payload.data);
      console.log(payload.data);
      break;
    case "receivedTracks":
      receivedTracks(payload.data);
      console.log(payload.data);
      break;
    case "receivedUserData":
      receivedUserData(payload.data);
      console.log(payload.data);
      break;
    case "receivedUserInfo":
      receivedUserInfo(payload.data);
      console.log(payload.data);
      break;

    case UserConstants.RECEIVE_CURRENT_USER:
      receiveCurrent(payload.user);
      break;
    case UserConstants.ERROR_RECEIVED:
      recieveError(payload.error);
      break;
    case "CLEAR_ERROR":
      clearErrors();
      break;
    case ResponseConstants.RECEIVE_SINGLE_RESPONSE:
      receiveNewResponse(payload.response);
      break;
    case AboutConstants.RECEIVE_SINGLE_ABOUT:
      updateAbout(payload.about);
      break;
  }

};

module.exports = SessionStore;
