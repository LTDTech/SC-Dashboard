getUserData: function(data) {
    $.ajax({
      url: 'http://52.37.234.149/sc/test/username',
      method: 'POST',
      data: insideoutpresents,
      success: function(returnUser) {
        console.log(data);
      },
      error: function(error) {
        console.log("this was an error");
      }
    });
  },
