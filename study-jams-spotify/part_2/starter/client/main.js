import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


// helper functions
Template.artists.helpers({
    artists() {
        return Session.get('artists');
    }
});

/* userdata helper functions
Template.userdata.helpers({
    user() {
        return Session.get('user');
    },
    userID(){
        return Session.get('userID');
    }
});

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
*/
