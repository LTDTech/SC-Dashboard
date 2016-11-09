var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');
var ResponseConstants = require('../constants/responseConstants');
var AboutConstants = require('../constants/aboutConstants');
var myStorage = localStorage;
var SessionStore = new Store(Dispatcher);

var _currentUser = JSON.parse(myStorage.getItem("currentUser"));
var _authenticationErrors = [];
var _loggedIn = false;

SessionStore.receivedUsers = function () {
  
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "receivedUsers":
      receivedUsers();
      break;
    case UserConstants.LOGOUT_USER:
      logoutUser();
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
