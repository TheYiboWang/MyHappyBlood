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
var myLogoutFunc = function() {
  Router.go('/home')
}

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

AccountsTemplates.configure({
  //Behavior
  confirmPassword: true,
  // Redirects
  homeRoutePath: '/home',

  texts: {
    title: {
      signIn: "Welcome to My Happy Blood",
      signUp: "Welcome to My Happy Blood",
    },

    errors: {
      loginForbidden: "Account does not exist",
      pwdMismatch: "These password don't match. Try agan?",
      validationErrors: "Please check your username or/and password",
    }
  },

  onLogoutHook: myLogoutFunc
})

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login'
})

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "Username",
    required: true,
  },
  {
    _id:'email',
    type: 'email',
    displayName: "Email Address",
    required: false,
    errStr: "Invalid Email Address"
  },
  {
    _id: "firstname",
    type: "text",
    displayName: "First Name",
    required: true,
  },
  {
    _id: "lastname",
    type: "text",
    displayName: "Last Name",
    required: true,
  },
  {
    _id: "age",
    type: "text",
    displayName: "Age     ",
    re: /^[0-9]+$/,
    required: true,
    errStr: "Invalid Age Number"
  },
  {
    _id: "gender",
    type: "select",
    displayName: "Gender    ",
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
  },
  pwd
])
