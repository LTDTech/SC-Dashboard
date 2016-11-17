var ServerAction = require('../actions/serverAction.js');

module.exports = {
  getUserData: function(data) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/all/test/collidoscopemusic',
      method: 'GET',
      success: function(returnTracks) {
        ServerAction.receivedTracks(returnTracks);
        hashHistory.push('dashboard');
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  }
};
