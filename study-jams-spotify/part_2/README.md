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



```js
// login
Template.login.events({
    'click #loginButton':function() {
        var options = {
            showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
            requestPermissions: ['user-read-email playlist-read-private playlist-modify-public playlist-modify-private playlist-read-collaborative'] // Spotify access scopes.
        };
        Meteor.loginWithSpotify(options, function(err) {
            console.log(err || "No error");
        });
    }
});
```



[End Result](final/client/templates/login.html)

## Deploying Your App to Microsoft Azure
### Using Your Microsoft Azure Pass
We will be using the following npm package and their [README](https://github.com/christopheranderson/azure-demeteorizer) to deploy our app to Microsoft Azure.
