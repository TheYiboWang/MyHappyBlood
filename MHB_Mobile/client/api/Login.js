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
      Meteor.defer(function () {Router.go('home');});
  });


  Meteor.subscribe("userData");

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
