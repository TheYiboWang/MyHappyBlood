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

if (Meteor.isClient) {

  Meteor.startup(function () {
    Meteor.defer(function () {Router.go('home');});
});

Router.route('/', function() {
  route.render('/home');
});


Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
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
//   // requestPermissions: {
//   //   facebook: ['user_likes'],
//   //   github: ['user', 'repo']
//   // },
//   // requestOfflineToken: {
//   //   google: true
//   // },
   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
 });
