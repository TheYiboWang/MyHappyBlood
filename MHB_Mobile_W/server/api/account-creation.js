//account-creation.js

import { Accounts } from 'meteor/accounts-base';

//set more fields during registration
Accounts.onCreateUser(function(options, user) {
 user.surveyData = []; //initialize to an empty array

 user.INRhistory = []; //initialize to an empty array

 // Don't forget to return the new user object at the end!
 return user;
});

//publish the non-default userdata (age, gender, medicineHistory,
//INRhistory and EatingPlan) to client
Meteor.publish("userData", function() {
    var currentUser = this.userId;
    if (currentUser) {
        return Meteor.users.find( currentUser , {
        fields: {
            surveyData: 1,

            INRhistory: 1,

            profile: 1,

            notifData:1
        }
     });
   }
   else {
     return this.ready();
   }
 });

//Allow client to update users collections
 Meteor.users.allow({
  update: function (userId, doc, fields, modifier) {
      return true;
  }
});
