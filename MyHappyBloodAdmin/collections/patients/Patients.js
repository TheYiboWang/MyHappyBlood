Patients = new Mongo.Collection('patients');


Patients.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});


MedicationHistory = new SimpleSchema({
    name: {
        type: String
    },
    dosage: {
        type: String
    },
    date: {
        type: String,
        autoValue: function(){
          var date = new Date();
          return moment(date).format("MM-DD-YYYY");}
    }

});

MealPlan = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    },
    date: {
        type: String,
        autoValue: function(){
          var date = new Date();
          return moment(date).format("MM-DD-YYYY");}
    }

});

PatientSchema = new SimpleSchema({
    username: {
        type: String,
        label: "username"
    },
    first: {
        type: String,
        label: "firstname"
    },
    last: {
        type: String,
        label: "lastname"
    },
    age: {
        type: String,
        label: "age"
    },

    joinedDate:{
        type: Date,
        label: "Member Since",
        autoValue: function (){return new Date();}
        ,
        autoform:{
            type: "hidden"
        }
    },
    medicationHistory:{
        type:[MedicationHistory]
    },
    mealPlan:{
        type:[MealPlan]
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {return this.userId;}
        ,
        autoform:{
            type: "hidden"
        }
    }


});



// Meteor.methods({
//     toggleMenuItem: function (id,currentState) {
//         Recipes.update(id, {
//             $set:{
//                 inMenu: !currentState
//             }
//         });
//     },
//     deleteRecipe: function (id) {
//         Recipes.remove(id);
//     }
//
// });

Patients.attachSchema(PatientSchema);
