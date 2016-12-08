var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/tracks.js');
var myStorage = localStorage;
var SessionStore = new Store(Dispatcher);

var _username = JSON.parse(myStorage.getItem("userName"));
var _authenticationErrors = [];
var _loggedIn = false;
var _waveformUrl = JSON.parse(myStorage.getItem("waveform_url"));

var _tracks = [];
var _followers = [];
var _user = {};
var _coordinates = [];
var _unknownFollowers = 0;

SessionStore.setUser = function (name) {
  myStorage.setItem("userName", JSON.stringify(name));
  _username = name;
};
SessionStore.setWaveform = function (waveform_url) {
  myStorage.setItem("waveform_url");
  _waveformUrl = waveform_url;
};
SessionStore.tracks = function () {
  return _tracks;
};
SessionStore.followers = function () {
  return _followers;
};
SessionStore.user = function () {
  return _user;
};
SessionStore.getUsername = function () {
  if (myStorage.getItem("userName") === "false"){
    return null;
  } else {
    return _username;
  }
};
SessionStore.releaseFollowers = function () {
  return _coordinates;
};

SessionStore.unknownFollowers = function () {
  _unknownFollowers = _unknownFollowers + 1;
};

var getCoordinates = function(followers) {
  followers.forEach(function(follower){
    $.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + follower.city + "key=AIzaSyCpZ5r-c6NA8hvSW_w90FPprl48G6O5JdM",
    success: function(coordinates) {
      _coordinates.push(JSON.parse.coordinates);
    },
    error: function(uncoordinated) {
      SessionStore.unknownFollowers(uncoordinated);
    }});
  });
  SessionStore.__emitChange();
};

var loginUser = function(user) {
  _currentUser = user;
  myStorage.setItem("currentUser", JSON.stringify(user));
  _loggedIn = true;
  clearErrors();
  SessionStore.__emitChange();
};

var receivedFollowers = function(receivedFollowers) {
  _followers = receivedFollowers;
  SessionStore.__emitChange();
  getCoordinates(_followers);
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
