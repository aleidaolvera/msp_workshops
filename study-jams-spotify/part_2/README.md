# Study Jam: Spotify Edition
> By Aleida Olvera, Georgetown's Microsoft Student Partner

The purpose of this study jam is to present to you a cool way to learn JavaScript and utilize different Web API's through [Meteor's](https://www.meteor.com/ "Meteor: An open source platform for web, mobile, and desktop.") building packaging platform!

## Workshop Todo's:
#### Part 1:
- [x] Learn to use Meteor
- [x] Create a bare bones web app
- [x] Learn how to create a Spotify Developer account

#### Part 2:
- [ ] Learn to use Spotify's Web API
- [ ] Connect Spotify Developer account with your Meteor app
- [ ] Pull in artist information
- [ ] Deploy your app to Microsoft Azure

## Getting Started
### Download Starter Code
Head over to https://tinyurl.com/study-jams-spotify-2 to download the starter code for this workshop.

## Getting Spotify Developer Account Information
Navigate back to your Spotify Developer Account that you created in the last workshop. Be sure to take note of the following information:
- Client ID
- Secret Key

In our code navigate to the following path:
`server/spotifyservice.js` and put in the information you noted from your developer account. This will give us access to Spotify's Web API. Now we can get to coding up our application!

### How will we be talking to Spotify?
There's a neat node.js wrapper for Spotify's Web Api. Here's the [repo](https://github.com/thelinmichael/spotify-web-api-node) for it if you're interested in finding out how to taking your app to the next level!

## Creating the Login / Artist Page
### Revisiting Templates
Remember a template in Meteor is just the basic structure the application will follow whenever a certain name is referenced.

To refresh your memory on what templates are we are going to work on creating two templates. We have already created the basic application layout in our last workshop. Now let's create a button at the home screen of our application. This is what users will use to login and use our app.

Let's navigate to the following path: `client/templates/login.html`
Open up the login.html file in your favorite text editor.

### Login Button
Let's use some Bootstrap to create a simple Login button. In our `login.html` let's create the simple markup for our template.

```HTML
    <template name="login">
        <button class="btn btn-lg btn-success">Login with Spotify</button>
    </template>
```

Let's add some functionality to our button. We need to add an identifier so that way when we create a funciton we know which element we need to target. Let's create our login functionality.

### Login.js
For this section we will be working with the following files:

        server/spotifyservice.js    # to connect our app to spotify
        client/main.js              # for our login button
        server/main.js              # server-side login

```js
// client-side code:
// login
Template.login.events({
    'click #loginButton':function() {
        var options = {
            // Whether or not to force the user to approve the app again if they’ve already done so.
            showDialog: true,
            // type of permissions
            // Spotify access scopes
            requestPermissions: ['user-read-email playlist-read-private playlist-modify-public playlist-modify-private playlist-read-collaborative']
        };
        Meteor.loginWithSpotify(options, function(err) {
            console.log(err || "No error");
        });
    }
});
```
Let's discuss what's going on in this function.

Now, the server needs to constantly check if the token is available. Spotify refreshes tokens periodically, so we have to work with this. The following function allows us to update the token if needed.

```js
// server-side code:
// check if token refreshed
var checkTokenRefreshed = function(response, api) {
  if (response.error && response.error.statusCode === 401) {
    api.refreshAndUpdateAccessToken();
    return true;
  }
  else {
    return false;
  }
};
```
### Creating our Search Template

```HTML
<template name="search">

    {{>login}}

    <div class="form-group">
      <input type="text" class="form-control" id="searchArtists" placeholder="Search for Artists">
    </div>

    {{>artists}}

</template>
```

### Creating the Artists Template
```HTML
<template name="artists">
  <h3>Search Results:</h3>
  <hr>
  <div class="container">

  </div>
</template>
```
Suggestions:
- How do we want the Artists information to pop up?
- What exactly are we looking for?

### Helper Functions
So what are helper functions? Helper functions are functions that _**help**_ us grab information we need to from whatever entity we are communicating with. This helps keep the process of asking for information from getting messy.

Let's create a helper function to talk to Spotify and send us information about a specific artist we search up.

#### Grabbing Artist Information

#### End Results:
- [login template](final/client/templates/login.html)
- [client/main.js](final/client/main.js)
- [server/main.js](final/server/main.js)
- [artists template](final/client/templates/artists.html)
- [search template](final/client/templates/search.html)

## Deploying Your App to Microsoft Azure
### Using Your Microsoft Azure Pass
**Need a pass? Raise your hand!**
We will be using the following npm package and their [README](https://github.com/christopheranderson/azure-demeteorizer) to deploy our app to Microsoft Azure.
