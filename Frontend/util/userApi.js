var ServerAction = require('../actions/serverAction.js');

module.exports = {
  getUserData: function(data) {
    $.ajax({
      url: 'http://sc.wysidio.com/sc/get/fiftyfollowers/insideoutpresents',
      method: 'GET',
      success: function(returnUser) {
        console.log(returnUser);
        ServerAction.receivedUsers(returnUser);
        console.log("going to dashboard");
        hashHistory.push('dashboard');
      },
      error: function(error) {
        console.log("this was an error");
      }
    });
  }
};
