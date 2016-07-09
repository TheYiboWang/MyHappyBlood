Patients = new Mongo.Collection('patients');


// Patients.allow({
//     insert: function (userId, doc) {
//         return !!userId;
//     },
//     update: function (userId, doc) {
//         return !!userId;
//     }
// });
//
// 
// INRHistory = new SimpleSchema({
//     INR: {
//         type: String
//     },
//     date: {
//         type: Date,
//     }
//
// });
//
// SurveyHistory = new SimpleSchema({
//     BleedOrNot: {
//       type: Boolean
//     },
//     MedOrNot:{
//       type: Boolean
//     },
//     mealPlan:{
//       type: Number
//     },
//     date: {
//         type: Date
//     }
//
// });
//
// PatientSchema = new SimpleSchema({
//     username: {
//         type: String,
//         label: "username"
//     },
//     first: {
//         type: String,
//         label: "firstname"
//     },
//     last: {
//         type: String,
//         label: "lastname"
//     },
//     age: {
//         type: String,
//         label: "age"
//     },
//
//     joinedDate:{
//         type: Date,
//         label: "Member Since",
//         autoValue: function (){return new Date();}
//         ,
//         autoform:{
//             type: "hidden"
//         }
//     },
//     INRHistory:{
//         type:[INRHistory]
//     },
//     SurveyHistory:{
//         type:[SurveyHistory]
//     },
//     author: {
//         type: String,
//         label: "Author",
//         autoValue: function () {return this.userId;}
//         ,
//         autoform:{
//             type: "hidden"
//         }
//     }
//
//
// });
//
//
//
// // Meteor.methods({
// //     toggleMenuItem: function (id,currentState) {
// //         Recipes.update(id, {
// //             $set:{
// //                 inMenu: !currentState
// //             }
// //         });
// //     },
// //     deleteRecipe: function (id) {
// //         Recipes.remove(id);
// //     }
// //
// // });
//
// Patients.attachSchema(PatientSchema);
