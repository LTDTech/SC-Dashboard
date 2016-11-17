var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/tracks.js');
var myStorage = localStorage;
var SessionStore = new Store(Dispatcher);

var _currentUser = JSON.parse(myStorage.getItem("currentUser"));
var _authenticationErrors = [];
var _loggedIn = false;

var _tracks = {};

SessionStore.allTracks = function () {
  var _tracksArray = [];
  for (var id in _tracks) {
    if (_tracks.hasOwnProperty(id)) {
      _tracksArray.push(_tracks[id]);
    }
  }
  return _tracksArray;
};

SessionStore.tracks = function () {
  return _tracks;
}

var receivedTracks = function() {

}

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "receivedUsers":
      receivedUsers();
      break;
    case "receivedTracks":
      receivedTracks(payload.data.trackData);
      console.log(payload.data.trackData);
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
