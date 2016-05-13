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


Router.route('/', function() {
  route.render('/home');
});


Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template

      this.render('login');
      // console.log("User ID"+userId);
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  //   console.log("login User email: " +Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address);
  //   // Users.insert({
  //   //   email: Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address),
  //   // });
  // /***OUR DUMMY DATA**/
  // var date = new Date();  //create a new date with current date and time
  // Users.insert({
  //     email: Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address,
  //     age: "43",
  //     medhistory: [{medication: "Warfarin",daily_dose: "50", days: "MWF", time: "5:00"}],
  //     INRscores: [{score: "55", date: date.toString()}]
  //
  // });
  // if(!Users.find({'email': Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address}))
  // {
  //     Users.insert({
  //         email: Meteor.users.findOne({_id:Meteor.userId()}.emails[0].address)
  //     });
  //     console.log("Inside !Users.find");
  // }

  }
});



Router.route('/home');


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



Accounts.ui.config({
   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
});
