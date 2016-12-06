var ServerAction = require('../actions/serverAction.js');

module.exports = {
  getUserData: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/api/validate/' + name,
      method: 'GET',
      success: function(receivedUser) {
        hashHistory.push('dashboard');
        ServerAction.receivedUser(receivedUser);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getTracks: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/api/get/' + name + '/tracks/filter/v/1/1',
      method: 'GET',
      success: function(returnTracks) {
        var filteredTracks = [];
        function convertWaveForm (old_waveform) {
          return old_waveform.replace(/(wis)/i, 'w1').replace(/(json)/i,'png');
        };
        returnTracks.forEach(function(track){
          track.waveform_url = convertWaveForm(track.waveform_url);
          filteredTracks.push(track);
        });
        ServerAction.receivedTracks(filteredTracks);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getFollowers: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/api/get/' + name + '/followersfifty/filter/v/1',
      method: 'GET',
      success: function(receivedFollowers) {
        ServerAction.receivedFollowers(receivedFollowers);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getUserInfo: function(name) {
    $.ajax({
      url: 'http://sc.wysidio.com/api/get/' + name + '/filter/v/1',
      method: 'GET',
      success: function(userInfo) {
        ServerAction.receivedUserInfo(userInfo);
        console.log(name, "here's the username");
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  userLogin: function(data) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      success: function(data) {
        ServerActions.loginUser(data);
        hashHistory.push('/dashboard');
      },
      error: function(error) {
        ServerActions.receiveError("error logging in");
      }
    });
  },
};
