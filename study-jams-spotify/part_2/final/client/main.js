import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


// helper functions
Template.artists.helpers({
    artists() {
        return Session.get('artists');
    }
});


// search events
Template.search.events({
    'keyup #searchArtists': function(event) {
        let searchText = event.target.value;
        if(searchText == '') {
            Session.set('artists', null);
        }
        Meteor.call('searchArtists', searchText, function(error, response){
            if(error){
                console.log("error", error);
            }
            if(response){
                Session.set('artists', response);
                console.log(response);
            }
        });
    }
});

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

/*
Template.userdata.onRendered = Meteor.call('getUserInfo', function(error, response){
    console.log("userdata.onRendered?");
    if(error){
        console.log("error userData onRendered", error);
    }
    if(response){
        Session.set('user', response);
        Session.set('userID', response.id);
        console.log("userdata onRendered response", response);
    }
});

Template.userdata.helpers({
    user() {
        return Session.get('user');
    },
    userID(){
        return Session.get('userID');
    }
});
*/
