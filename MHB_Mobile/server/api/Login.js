var postSignUp = function(userId, info){
  Router.plugin('ensureSignedIn');
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
})
