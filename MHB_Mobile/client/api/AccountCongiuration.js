var myLogoutFunc = function() {
  Router.go('/home')
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
  {
    _id: "medication",
    type: "select",
    displayName: "Medication    ",
    select: [
        {
            text: "Warfarin",
            value: "warfarin",
        },
        {
            text: "NonWarfarin",
            value: "nonWarfarin",
        },
    ],
  },
  pwd
])
