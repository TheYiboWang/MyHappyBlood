// Router.route('/logout', function(){
//   var self = this;
//   Meteor.logout(function(err){
//       if(err){
//         console.log('Error Logging out: '+ err);
//       }
//     self.redirect('/');
//     // Router.go('home'); (Also tried this and didn't work)
//   });
// });
import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {

  Meteor.startup(function () {

    Push.addListener('token', function(token) {
      alert('Token: ' + JSON.stringify(token));
    });

      Meteor.defer(function () {Router.go('home');});
  });


  Meteor.subscribe("userData");
  Meteor.subscribe("PastReminders");

  Template.loginButtons.rendered = function(){
      Accounts._loginButtonsSession.set('dropdownVisible', true);
      $(".login-close-text").hide();
  }
  Template.home.events({
    'click .logout': function(){
      Meteor.logout();
    }
  })

}
