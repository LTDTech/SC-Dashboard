# SC-Dashboard

### Quick summary

The current version of this app is designed to have a user log in using their Soundcloud profile url and show a preview of data representations based on their SC account information. User, follower, and individual track data is all requested via AJAX requests to a back-end server, which then submit AJAX requests to SC's API. If the requests come back successful, then the user's first 50 followers, the number of followers, followings, and tracks they have, and information on each one of their tracks are all displayed on the dashboard.

### Single Page Application

This app is a single page application that uses the properties of React and React Router to deliver all content on a single static page. All communication with the backend happens through API AJAX requests.

```javascript
    var RouterComponent = (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage}/>
          <Route path="dashboard" component={ScDash}/>
          <Route path="login" component={Login}/>
          <Route path="signup" component={SignUpPage}/>
          <Route path="services" component={Services}/>
          <Route path="about" component={About}/>
          <Route path="team" component={Team}/>
        </Route>
      </Router>
    );
    document.addEventListener("DOMContentLoaded", function(){
      ReactDOM.render(RouterComponent, document.getElementById('root'));
    });
  ```

### User Authentication

  Being that the site aims to help artists track and utilize their Soundcloud account data to build their artistic brand, the first step in using the app is to verify an artist's Soundcloud profile url. When a profile url is entered via the Landing page, the url is acquired using JQuery and sent to the sessionStore, where it is saved as the username for the session. The url is also handed off through the Flux loop to the Client Action (in the actions folder), and then to the User API (in the util folder). The User API then submits an AJAX request to the remote server hosting our back-end code, which submits an AJAX request to Soundcloud's API. If the response comes back as a success then the user is routed to the dashboard and the returned user's SC handle gets restored in the user variable of the sessionStore.

```javascript
  var LandingPage = React.createClass({
    getUserData() {
      var name = $('.userNameInput').val()
      console.log(name);
      SessionStore.setUser(name);
      ClientAction.getUserData(name);
    }
    ,
    render: function() {
      return(
        <div className="mainLand">
          <div className="scLogin">
            <div className="login-contents">
              <img className="land-logo" src="./img/wysidio.jpg"></img>
            </div>
            <div className="sc-name-input">
              <form className="sc-name-form">
                <br/>
                  <input type="text"
                    className="form-textbox userNameInput"
                    // value={this.state.username}
                    // onChange={this.onChange}
                    placeholder="Your Soundcloud Username"
                    id="username" />
                <br/>
              </form>
              <button className="scButton" onClick={this.getUserData}>
                <div className="scButton2">
                  <img className="scIcon scButton3" src="./img/scicon4.png"></img>
                  <h3 className="get-started">Get Started</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    }
  });
```

```javascript

Located in the userApi:

module.exports = {
  getUserData: function(name) {
    $.ajax({
      url: 'https://sc.ltd-brands.com/api/validate/' + name,
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
      url: 'https://sc.ltd-brands.com/api/get/' + name + '/tracks/filter/v/1/1',
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
      url: 'https://sc.ltd-brands.com/api/get/' + name + '/followersfifty/filter/v/1',
      method: 'GET',
      success: function(receivedFollowers) {
        ServerAction.receivedFollowers(receivedFollowers);
        ServerAction.getCoordinates(receivedFollowers);
      },
      error: function(error) {
        console.log(error.statusCode());
      }
    });
  },
  getUserInfo: function(name) {
    $.ajax({
      url: 'https://sc.ltd-brands.com/api/get/' + name + '/filter/v/1',
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
};
```


### The Dashboard

The most important feature of this application is the Dashboard component. This component is responsible for passing down user, and follower data, while also initializing the Jvector Map. When the Dashboard mounts, it calls several client actions, which call AJAX requests in the User API to the back-end (getFollowers and getUserInfo). If these AJAX requests come back as successes then the follower and user data is sent to the sessionStore via a Server Action function, and is subsequently stored in the followers array, where each follower is an object, the and user object respectively. The getFollowers AJAX request also calls ServerAction.getCoordinates, which attempts to submit an AJAX request to a Google coordinate API for each individual follower that an artist has (more on this below). When the session changes, the user data gets injected in the user-panel component and follower data gets injected into the followers component. For each follower that is received, a follower component is created with data represented for each individual follower. Each follower has a working link to their SC page, their profile picture, and their city.

```javascript

var ScDash = React.createClass({
  getInitialState: function() {
    return {user: SessionStore.user(),
    username: SessionStore.getUsername(),
    followers: SessionStore.getCoordinates()};
  },
  componentDidMount: function() {
    this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
    ClientAction.getUserInfo(this.state.username);
    ClientAction.getFollowers(this.state.username);
    $(function(){
      $('.map').vectorMap({map: 'us_aea'});
    });
  },
  onSessionChange: function() {
    this.setState({user: SessionStore.user(),
    followers: SessionStore.getCoordinates(),
    username: SessionStore.getUsername()});

    // if (this.state.followers !== null) {
    //   $('.map').vectorMap({
    //     map: 'us_aea_en',
    //     markers: data.metro.coords,
    //     series: {
    //       markers: [{
    //         attribute: 'fill',
    //         scale: ['#FEE5D9', '#A50F15'],
    //         values: data.metro.unemployment[val],
    //         min: jvm.min(metroUnemplValues),
    //         max: jvm.max(metroUnemplValues)
    //       },{
    //         attribute: 'r',
    //         scale: [5, 20],
    //         values: data.metro.population[val],
    //         min: jvm.min(metroPopValues),
    //         max: jvm.max(metroPopValues)
    //       }],
    //       regions: [{
    //         scale: ['#DEEBF7', '#08519C'],
    //         attribute: 'fill',
    //         values: data.states[val],
    //         min: jvm.min(statesValues),
    //         max: jvm.max(statesValues)
    //       }]
    //     }
    //     //...
    //   });
    // }

  },
  render: function(){
    var renderFollowers = [];
    var that = this;
    return (
      <div className="main-Sc-Div">
        <Navbar/>
        <div className="dashHeader">
          <h1>Your Dashboard</h1>
        </div>
        <div className="follower-content">
          <div className="account-data">
            <UserPanel user={this.state.user}/>
            <div className="followers-title">
              <h3>Your Followers
              </h3>
            </div>
            <div className="followers">
              <AllFollowers/>
            </div>
          </div>
          <div className="the-map">
            <GeoMap/>
          </div>
        </div>
        <div className="track-content-header">
          <h1>Track Activity</h1>
        </div>
        <div className="main-track-content">
          <AllTracks/>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = ScDash;


var AllFollowers = React.createClass({
    getInitialState: function() {
      return {followers: SessionStore.followers(),
      user: SessionStore.user(),
      username: SessionStore.getUsername()};
    },
    componentDidMount: function() {
      this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
    },
    componentWillUnmount: function() {
      this.sessionStoreListener.remove();
    },
    onSessionChange: function() {
      this.setState({followers: SessionStore.followers(),
      user: SessionStore.user(),
      username: SessionStore.getUsername()});
    },
  render: function(){
    var renderFollowers = [];
    var that = this;
    this.state.followers.forEach(function(follower){
      renderFollowers.push(<Follower className="main-follower" follower={follower} key={follower.id}/>)
    });
    return (
      <div className="all-followers">
        { renderFollowers }
      </div>
    );
  }
});

module.exports = AllFollowers;


var Follower = React.createClass({
    getInitialState: function() {
      return {followers: SessionStore.followers()}
    },
    componentDidMount: function() {
    },
    // componentWillUnmount: function() {
    //   this.sessionStoreListener.remove();
    // },
    onSessionChange: function() {
      this.setState({followers: SessionStore.followers()});
    },
  render: function(){
    return (
      <div className="main-follower">
        <div className="follower-pic-div">
          <img className="followerPic" src={this.props.follower.avatar_url} alt="Profile Picture"/>
        </div>
        <div className="follower-info">
          <div className="follower-name">
            <a href={this.props.follower.permalink_url}>{this.props.follower.username}
            </a>
          </div>
          <div className="follower-city">
            {this.props.follower.city}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Follower;




```

### Tracks

Track data is retrieved and displayed in a very similar fashion to user and follower data. When the all-tracks component mounts, it performs an AJAX request via the Flux loop and stores each individual track object in an array in the store. Then when the session changes, an individual track component is created for each object in the array with the track graphic, title (which is a working link to the song on SC), # of plays, # of likes, and # of reposts.

```javascript

var AllTracks = React.createClass({
    getInitialState: function() {
      return {tracks: SessionStore.tracks(),
      user: SessionStore.user(),
      username: SessionStore.getUsername()};
    },
    componentDidMount: function() {
      this.sessionStoreListener = SessionStore.addListener(this.onSessionChange);
      ClientAction.getTracks(this.state.username);
    },
    componentWillUnmount: function() {
      this.sessionStoreListener.remove();
    },
    onSessionChange: function() {
      this.setState({tracks: SessionStore.tracks()});
    },
    convertWaveForm (old_waveform) {
      return old_waveform.replace(/(wis)/i, 'w1').replace(/(json)/i,'png');
    },
  render: function(){
    var renderTracks = [];
    var that = this;
    this.state.tracks.forEach(function(track){
      renderTracks.push(<Track className="main-track" track={track} key={track.id}/>)
    });
    return (
      <div className="all-tracks">
        { renderTracks }
      </div>
    );
  }
});

module.exports = AllTracks;


var Track = React.createClass({
  render: function(){
    return (
      <div className="main-track">
        <div className="track-pic">
          <img src={this.props.track.artwork_url} alt="Track Picture"/>
        </div>
        <div className="track-content">
          <div className="track-info">
            <div className="track-name">
              <div className="track-title">
                <a href={this.props.track.permalink_url}>{this.props.track.title}</a>
              </div>
            </div>
            <div className="track-plays">
              <p className="track-text">Plays</p>
              <div className="track-react">
                {this.props.track.playback_count}
              </div>
            </div>
            <div className="track-likes">
              <p className="track-text">Likes</p>
              <div className="track-react">
                {this.props.track.likes_count}
              </div>
            </div>
            <div className="track-reposts">
              <img className="repost-img" src="./img/reposticon.png"/>
              <div className="track-react">
                {this.props.track.reposts_count}
              </div>
            </div>
          </div>
          <div className="track-wav">
            <img className="waveform" src={this.props.track.waveform_url}/>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Track;
```

### Incomplete Features

## Jvector Map

The idea behind the Jvector Map is that the user can see follower densities across the U.S., and use this information to better plan tours and monitor brand growth. Unfortunately the chief officers of the company decided to scrap this feature once they decided to shift the focus of the project, but all of the code we wrote is still present.

There's one main issue preventing this feature from being an easy implementation, and that's the inconsistency of followers' cities. Because of this each follower's city key must be sent to a Google API that returns specific coordinates for each follower.
We got as far as to make individual AJAX requests for each follower but couldn't completed debug the response issues because there is a daily quota on how many free requests can be made for this specific Google API, and the company officers didn't feel it was worth paying for.


```javascript

var getCoordinates = function(followers) {
  followers.slice(0,20).forEach(function(follower){
    $.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?address=+" + follower.city + "key=AIzaSyCpZ5r-c6NA8hvSW_w90FPprl48G6O5JdM",
    success: function(coordinates) {
      console.log(coordinates, "here are the coordinates");
      _coordinates.push(JSON.parse.coordinates);
    },
    error: function(uncoordinated) {
      console.log("There was an error getting the coordiantes");
      SessionStore.unknownFollowers();
    }});
  });
  SessionStore.__emitChange();
};

```

## Login and Sign Up Pages

The purpose of these pages is to handle a further level of authentication for when a user is ready to purchase the analytics service and see more data on their dashboard. Right now they are styled and mobile friendly, but do not submit any AJAX requests to the back-end.

## Navbar

This still needs to be completely mobile friendly.
