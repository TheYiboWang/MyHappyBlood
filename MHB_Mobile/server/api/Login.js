var postSignUpFunc = function(userId, info){
  Meteor.users.update( { _id: userId}, { $set: { profile: info.profile }} )
}

AccountsTemplates.configure({
  postSignUpHook: postSignUpFunc
})
