import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'searchArtists'(searchText){
        var spotifyApi = new SpotifyWebApi();
        //grab JSON list of albums based on text search
        var response = spotifyApi.searchArtists(searchText, {
          limit: 5
        });
        // Need to refresh token
        if (checkTokenRefreshed(response, spotifyApi)) {
          response = spotifyApi.searchArtists(searchText, {
            limit: 5
          });
        }
        return response.data.body.artists.items;
    },
    'getUserInfo'(){
        var spotifyApi = new SpotifyWebApi();
        var response = spotifyApi.getMe();
        // if need to refresh token
        if (checkTokenRefreshed(response, spotifyApi)) {
          response = spotifyApi.getMe();
        }
        return response.data.body;
    },
    'getUsername'(){
        var spotifyApi = new SpotifyWebApi();
        var response = spotifyApi.getMe();
        // if need to refresh token
        if (checkTokenRefreshed(response, spotifyApi)) {
          response = spotifyApi.getMe();
        }
        return response.data.body.id;
    },
});

var checkTokenRefreshed = function(response, api) {
  if (response.error && response.error.statusCode === 401) {
    api.refreshAndUpdateAccessToken();
    return true;
  }
  else {
    return false;
  }
};
