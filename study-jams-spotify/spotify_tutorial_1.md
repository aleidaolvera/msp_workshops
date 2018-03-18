# Study Jam: Spotify Edition
> By Aleida Olvera, Georgetown's Microsoft Student Partner

The purpose of this study jam is to present to you a cool way to learn JavaScript and utilize different Web API's through [Meteor's](https://www.meteor.com/ "Meteor: An open source platform for web, mobile, and desktop.") building packaging platform!

## Workshop Todo's:
#### Part 1:
* Learn to use Meteor
* Create a bare bones web app
* Learn how to create a Spotify Developer account

#### Part 2:
* Learn to use Spotify's Web API
* Connect Spotify Developer account with your Meteor app
* Pull in artist information
* Deploy your app to Microsoft Azure

## Getting Started
### Setting Up Meteor
##### OSX / Linux
- Run the following command in your terminal to install the latest official Meteor release:

    ` curl https://install.meteor.com/ | sh `

##### Windows
- First install [Chocolatey](https://chocolatey.org/install), then run this command using an Administrator command prompt:

    ` choco install meteor `

> Meteor supports Windows 7/Windows Server 2008 R2 and up. <br/>
> The installer uses Chocolatey, which has its own requirements.

### Creating and Running a Meteor Project
- To create the app, open your terminal and type:

    ` meteor create spotify-study-jam `

This will create a new folder called  `spotify-study-jam` with all of the files that a Meteor app needs:

        client/main.js        # a JavaScript entry point loaded on the client
        client/main.html      # an HTML file that defines view templates
        client/main.css       # a CSS file to define your app's styles
        server/main.js        # a JavaScript entry point loaded on the server
        package.json          # a control file for installing NPM packages
        package-lock.json     # Describes the NPM dependency tree
        .meteor               # internal Meteor files
        .gitignore            # a control file for git

To run the newly created app:
``` console
    cd spotify-study-jam
    meteor
```

Open your web browser and go to http://localhost:3000 to see the app running.

You can play around with this default app for a bit before we continue. For example, try editing the text in `<h1>` inside client/main.html using your favorite text editor.

## Creating and Customizing Templates
To start working on our `spotify-study-jam` app, let's replace the code of the default starter app (`client/main.html`) with the code below. Then we'll talk about what it does.

```HTML
    <head>
      <title>spotify_study_jam</title>
    </head>

    <template name="layout">
      <!-- this is where our navigation is going to be -->
      {{> navbar}}
      <div class="container">
        <!-- this is where all our different code will be rendered -->
        {{>yield}}
      </div>
    </template>

```
The `template` tag is going to be populated later. This is going to determine our app's overall design.

#### So... what is a template?
A _**template**_ is just what you think it is _&mdash; a layout that is used over an over as the application is being presented to the screen._

### Working with Blaze Templates

Meteor comes with a template library called Blaze and it will be utilized throughout our workshop. Templates are your best friends!

Using Blaze's templating system, it's easy to identify which portions of our code are templates. Can you correctly identify where each of the templates are?

#### Enough talk.. let's create

Meteor has some cool functionalities that allow us to create templates anywhere and meteor will bring them all together and identify where each template is automatically!
> _This means we don't have to be constantly linking back and forth between files. We can organize files in any way we want and Meteor should be able to correctly identify them!_


Let's test this out by creating some new folders that we can organize our files into. We'll create the following folders inside `client`:

        navbar.html     # our navigtion menu
        login.html      # login information
        search.html     # for our search bar
        userdata.html   # presenting user data

### Adding Packages in Meteor
What's really cool about Meteor's library is the fact that we can take other people's already created code and use it in our project. Have you heard of [Bootstrap](https://getbootstrap.com/) &mdash; the popular CSS framework?

Let's add some packages to our Meteor application. Type in the following commands:

        meteor add twbs:bootstrap
        meteor add iron:router

#### Bootstrap
Let's paste the following code in our [`navbar.html`](navbar.html) file:
```HTML
<template name="navbar">
  <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">learnMeteor</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/user">User Information</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

```
Let's talk about what it does!

#### Iron Router
Now that we have a basic understanding of what our application is doing. Let's try and give the app some navigation. We're going to populate the other files that we just created and give our meteor applicaiton the ability to _**render**_ different layouts for different urls.




## Setting Up Spotify Developer Account
Let's take a bit of a coding break and learn a bit more about Spotify's Web API.
1. Head over to the [Spotify Developer website](https://developer.spotify.com/).
2. Login to your account or create an account!
3. Create an app!
4. Make note of the following information:
    - Client ID
    - Client Secret

## Back to Meteor
