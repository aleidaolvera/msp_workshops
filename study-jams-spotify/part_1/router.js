Router.configure( {
  layoutTemplate: 'layout',
});

Router.onBeforeAction(function () {
    this.next();
});

Router.map(function(){
  this.route('/', function() {
    this.render('search');
  });

  this.route('/user', {
      name: 'userdata',
      data: function(){
          return Session.get('user');
      }
  });
  
});
